// scripts/auto-monitor.ts
// Auto-monitoring e auto-fix per Villa Olimpia
import fs from 'fs'
import path from 'path'

interface HealthCheck {
  timestamp: Date
  errors: string[]
  warnings: string[]
  fixes: string[]
}

const appartamenti = [
  'geranio', 'zeus', 'poseidon', 'apollo', 'afrodite', 
  'atena', 'era', 'artemide', 'dioniso', 'ermes', 
  'orchidea', 'azalea', 'giglio', 'fiordaliso', 'frangipane'
]

async function runHealthCheck(): Promise<HealthCheck> {
  const health: HealthCheck = {
    timestamp: new Date(),
    errors: [],
    warnings: [],
    fixes: []
  }

  const imagesDir = path.join(process.cwd(), 'public/images')
  
  // 1. Check foto appartamenti
  for (const apt of appartamenti) {
    const dir = path.join(imagesDir, 'appartamenti', apt)
    if (!fs.existsSync(dir)) {
      health.warnings.push(`Cartella ${apt} non esiste`)
    } else {
      try {
        const files = fs.readdirSync(dir).filter(f => 
          f.match(/\.(jpg|jpeg|png|webp)$/i)
        )
        if (files.length === 0) {
          health.errors.push(`${apt}: nessuna foto`)
        } else if (files.length < 3) {
          health.warnings.push(`${apt}: solo ${files.length} foto`)
        }
      } catch (error) {
        health.errors.push(`${apt}: errore lettura cartella`)
      }
    }
  }

  // 2. Check foto critiche
  const criticalImages = [
    '/images/villa/gallery/night-1.jpg',
    '/images/villa/hero/facciata_villa_olimpia_.jpg',
    '/images/amenities/piscina.jpg'
  ]

  for (const img of criticalImages) {
    const imgPath = path.join(process.cwd(), 'public', img)
    if (!fs.existsSync(imgPath)) {
      health.warnings.push(`Immagine critica mancante: ${img}`)
    }
  }

  // 3. Check componenti critici
  const criticalComponents = [
    'components/parallax-hero.tsx',
    'components/floating-booking.tsx',
    'components/newsletter-popup.tsx',
    'app/enogastronomia/page.tsx'
  ]

  for (const comp of criticalComponents) {
    const compPath = path.join(process.cwd(), comp)
    if (!fs.existsSync(compPath)) {
      health.errors.push(`Componente critico mancante: ${comp}`)
    }
  }

  return health
}

async function generateReport(health: HealthCheck) {
  const report = `
=== HEALTH CHECK ${health.timestamp.toISOString()} ===
Errors: ${health.errors.length}
Warnings: ${health.warnings.length}
Fixes Applied: ${health.fixes.length}

${health.errors.length > 0 ? 'ERRORS:\n' + health.errors.map(e => `  ❌ ${e}`).join('\n') + '\n' : ''}
${health.warnings.length > 0 ? 'WARNINGS:\n' + health.warnings.map(w => `  ⚠️  ${w}`).join('\n') + '\n' : ''}
${health.fixes.length > 0 ? 'FIXES:\n' + health.fixes.map(f => `  ✅ ${f}`).join('\n') + '\n' : ''}
`

  const logPath = path.join(process.cwd(), 'health-check.log')
  fs.writeFileSync(logPath, report)
  console.log(report)
  
  return health
}

// Esegui se chiamato direttamente
if (require.main === module) {
  runHealthCheck()
    .then(generateReport)
    .then(health => {
      process.exit(health.errors.length > 0 ? 1 : 0)
    })
    .catch(error => {
      console.error('Error running health check:', error)
      process.exit(1)
    })
}

export { runHealthCheck, generateReport }











