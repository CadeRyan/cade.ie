/** Editorial section header: index number, big title, optional note. */
export default function SectionHead({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="hairline-t mb-12 flex flex-wrap items-end justify-between gap-4 pt-5 md:mb-16">
      <div className="flex items-baseline gap-4 md:gap-6">
        <span className="meta-label text-ember">({index})</span>
        <h2 className="display text-display-md text-bone" data-reveal="lines">
          {title}
        </h2>
      </div>
      {note ? <p className="meta-label pb-1 text-bone-faint">{note}</p> : null}
    </div>
  );
}
