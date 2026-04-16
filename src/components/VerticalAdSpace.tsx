export function VerticalAdSpace() {
  return (
    <div className="hidden xl:flex flex-col items-center justify-center w-[120px] shrink-0">
      <div className="sticky top-20 flex flex-col items-center gap-2 rounded-xl bg-surface-container-low/50 px-3 py-6">
        <p className="font-body text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          Vertical Ad Space
        </p>
      </div>
    </div>
  );
}
