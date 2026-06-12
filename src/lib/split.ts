/**
 * Minimal line splitter for masked text reveals. Splits an element's content
 * into words (keeping inline elements atomic), groups them into visual lines,
 * and wraps each line in an overflow mask. Returns the inner line elements.
 */
export function splitLines(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split === "done") {
    return Array.from(el.querySelectorAll<HTMLElement>(".split-line"));
  }

  const sourceNodes = Array.from(el.childNodes);
  const words: HTMLElement[] = [];
  // Tracks whether the last consumed content ended at a whitespace boundary,
  // so punctuation straddling inline elements ("…Aritzia</span> —") stays attached.
  let openBoundary = true;

  const wrapWord = (content: Node) => {
    const w = document.createElement("span");
    w.style.display = "inline-block";
    w.appendChild(content);
    words.push(w);
  };

  const appendToLastWord = (content: Node) => {
    if (words.length === 0) {
      wrapWord(content);
      return;
    }
    words[words.length - 1].appendChild(content);
  };

  sourceNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text.trim()) {
        if (text.length > 0) openBoundary = true;
        return;
      }
      const startsWithSpace = /^\s/.test(text);
      const endsWithSpace = /\s$/.test(text);
      const parts = text.split(/\s+/).filter(Boolean);
      parts.forEach((part, i) => {
        const glue = i === 0 && !startsWithSpace && !openBoundary;
        if (glue) appendToLastWord(document.createTextNode(part));
        else wrapWord(document.createTextNode(part));
      });
      openBoundary = endsWithSpace;
    } else if (node instanceof HTMLElement) {
      if (!openBoundary) appendToLastWord(node);
      else wrapWord(node);
      openBoundary = false;
    }
  });

  // Lay the words out to measure natural line wrapping.
  el.textContent = "";
  words.forEach((w, i) => {
    el.appendChild(w);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });

  const lines: HTMLElement[][] = [];
  let lastTop: number | null = null;
  words.forEach((w) => {
    const top = w.offsetTop;
    if (lastTop === null || Math.abs(top - lastTop) > 2) {
      lines.push([w]);
      lastTop = top;
    } else {
      lines[lines.length - 1].push(w);
    }
  });

  // Rebuild as masked lines.
  el.textContent = "";
  const lineEls = lines.map((lineWords) => {
    const mask = document.createElement("span");
    mask.className = "split-line-mask";
    const line = document.createElement("span");
    line.className = "split-line";
    lineWords.forEach((w) => {
      line.appendChild(w);
      // Trailing spaces keep textContent (copy/paste, a11y) intact across lines.
      line.appendChild(document.createTextNode(" "));
    });
    mask.appendChild(line);
    el.appendChild(mask);
    return line;
  });

  el.dataset.split = "done";
  el.classList.add("is-split");
  return lineEls;
}
