"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3.5 text-sm font-semibold transition-colors hover:border-ink"
    >
      Print
    </button>
  );
}
