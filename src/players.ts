// Muss zu den check-Constraints in supabase/schema.sql passen.
export type PlayerId = 'lukas' | 'philipp' | 'yannick' | 'ansgar' | 'gerrit' | 'david'

export interface Player {
  id: PlayerId
  name: string
  title: string // Beiname auf Helden- und Login-Karte (vom User vorzugeben)
  color: string // Fallback, solange es kein Kopfbild gibt
  head: string // lokaler Fallback; online kommen die Bilder aus Supabase Storage (src/lib/heads.ts)
}

const heads = `${import.meta.env.BASE_URL}heads/`

// Beinamen sind Platzhalter, bis die Gruppe eigene vergibt.
export const PLAYERS: Player[] = [
  { id: 'lukas', name: 'Lukas', title: 'Der irre Ire', color: '#e76f51', head: `${heads}lukas.jpg` },
  { id: 'philipp', name: 'Philipp', title: 'Strammborn', color: '#2a9d8f', head: `${heads}philipp.jpg` },
  { id: 'yannick', name: 'Yannick', title: 'Professioneller Laie', color: '#e9c46a', head: `${heads}yannick.jpg` },
  { id: 'ansgar', name: 'Ansgar', title: 'Ultras GEler', color: '#6a4c93', head: `${heads}ansgar.jpg` },
  { id: 'gerrit', name: 'Gerrit', title: 'Der Neue Alte', color: '#457b9d', head: `${heads}gerrit.jpg` },
  { id: 'david', name: 'David', title: 'Deutsche Mark Forster', color: '#b5838d', head: `${heads}david.jpg` },
]

export const playerById = (id: PlayerId) => PLAYERS.find((p) => p.id === id)!
