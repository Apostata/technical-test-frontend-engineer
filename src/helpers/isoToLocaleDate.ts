export function IsoToLocaleDate(date: string): string {
  const iso = new Date(date);
  return iso.toLocaleDateString("pt-BR");
}
