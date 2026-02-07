// scripts/auto-update-content.ts
// Aggiorna automaticamente informazioni stagionali

interface SeasonalContent {
  month: number
  heroText: string
  featuredSection: string
}

const seasonalContent: SeasonalContent[] = [
  // Estate (Giu-Set)
  { month: 5, heroText: 'Rinfrescati nella nostra piscina a 70m dal mare', featuredSection: 'piscina' },
  { month: 6, heroText: 'Estate perfetta: piscina, mare e relax a Villa Olimpia', featuredSection: 'piscina' },
  { month: 7, heroText: 'Vivi l\'estate calabrese: piscina privata e spiaggia a due passi', featuredSection: 'mare' },
  { month: 8, heroText: 'Agosto a Villa Olimpia: piscina e mare cristallino ti aspettano', featuredSection: 'mare' },
  
  // Autunno (Ott-Nov)
  { month: 9, heroText: 'Autunno in Calabria: degustazioni vino e sapori autunnali', featuredSection: 'enogastronomia' },
  { month: 10, heroText: 'Ottobre perfetto per scoprire i sapori autunnali calabresi', featuredSection: 'enogastronomia' },
  
  // Inverno (Dic-Feb)
  { month: 11, heroText: 'Scopri la Sila innevata e le tradizioni natalizie calabresi', featuredSection: 'territorio' },
  { month: 0, heroText: 'Capodanno in Calabria: tradizioni e sapori d\'inverno', featuredSection: 'territorio' },
  { month: 1, heroText: 'Gennaio: relax e scoperta delle tradizioni calabresi', featuredSection: 'territorio' },
  
  // Primavera (Mar-Mag)
  { month: 2, heroText: 'Primavera in Calabria: Valli Cupe UNESCO e territorio in fiore', featuredSection: 'territorio' },
  { month: 3, heroText: 'Aprile perfetto per esplorare il territorio calabrese', featuredSection: 'territorio' },
  { month: 4, heroText: 'Maggio: natura in fiore e prime giornate al mare', featuredSection: 'territorio' },
]

export function getSeasonalContent(): SeasonalContent {
  const month = new Date().getMonth()
  return seasonalContent.find(sc => sc.month === month) || seasonalContent[0]
}

export function updateSeasonalHeroText(): string {
  const content = getSeasonalContent()
  return content.heroText
}

// Esporta per uso futuro
export { seasonalContent }












