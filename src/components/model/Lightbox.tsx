import { useEffect, useState } from "react";

interface ActiveImage {
  src: string;
  alt: string;
}

export default function Lightbox() {
  const [active, setActive] = useState<ActiveImage | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>("[data-full]");
      if (!trigger) return;
      setActive({
        src: trigger.dataset.full ?? "",
        alt: trigger.dataset.alt ?? "",
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
      onClick={() => setActive(null)}
    >
      <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
        <img
          src={active.src}
          alt={active.alt}
          className="max-h-[90vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}
