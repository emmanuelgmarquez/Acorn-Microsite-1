import { isPlaceholder } from "@/lib/placeholder";

/**
 * Renders content text. Placeholders ("[like this]") get a dashed highlight
 * so they are impossible to miss before launch.
 */
export function T({ children }: { children: string }) {
  if (children && isPlaceholder(children)) {
    return (
      <span className="placeholder" title="Placeholder — edit in src/content">
        {children}
      </span>
    );
  }
  return <>{children}</>;
}
