/** True for strings written as "[Something to fill in]". */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return trimmed.startsWith("[") && trimmed.endsWith("]");
}

/** Returns the value only if it has been filled in. */
export function filled(value: string | undefined | null): string | undefined {
  return value && !isPlaceholder(value) ? value : undefined;
}
