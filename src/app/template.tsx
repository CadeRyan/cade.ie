import Reveals from "@/components/ui/Reveals";

/** Remounts on every navigation so scroll reveals re-run per page. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Reveals />
    </>
  );
}
