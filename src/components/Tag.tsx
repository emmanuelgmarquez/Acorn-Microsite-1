import { T } from "./Text";

export function Tag({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink/80">
      <T>{children}</T>
    </li>
  );
}

export function TagList({
  items,
  label,
  className = "",
}: {
  items: string[];
  label: string;
  className?: string;
}) {
  if (items.length === 0) return null;
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item, i) => (
        <Tag key={`${item}-${i}`}>{item}</Tag>
      ))}
    </ul>
  );
}
