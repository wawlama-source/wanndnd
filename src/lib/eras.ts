/** Ränge der Heldengruppe, die man mit gespielten D&D-Abenden erreicht. `from` = nötige Abende. */
export const ERAS = [
  { name: 'Bauerntölpel', icon: '🌾', from: 0 },
  { name: 'Grünschnäbel', icon: '🗡', from: 1 },
  { name: 'Söldnertrupp', icon: '🛡', from: 3 },
  { name: 'Veteranen', icon: '⚔', from: 6 },
  { name: 'Helden des Reiches', icon: '🏰', from: 10 },
  { name: 'Drachentöter', icon: '🐉', from: 15 },
  { name: 'Lebende Legenden', icon: '👑', from: 21 },
  { name: 'Halbgötter', icon: '✨', from: 28 },
] as const

export type Era = (typeof ERAS)[number]

/** Index des Rangs für eine Anzahl gespielter Abende. */
export function eraIndex(nights: number): number {
  let i = 0
  while (i + 1 < ERAS.length && nights >= ERAS[i + 1].from) i++
  return i
}
