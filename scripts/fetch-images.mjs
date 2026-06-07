// Temporary tool: pulls curated high-quality Unsplash URLs for the redesign.
// Picks the first result whose description/slug matches a relevance regex.
// Outputs src/components/chinaconnect/stockImages.ts

import { writeFile } from 'node:fs/promises'

const queries = {
  // categories
  cat_electronics: ['consumer electronics gadgets', /phone|laptop|electron|gadget|camera|headphone/i],
  cat_fashion: ['clothing fashion boutique rack', /cloth|fashion|apparel|dress|wardrobe|shirt/i],
  cat_home: ['modern living room interior', /room|interior|home|sofa|furnitur|living/i],
  cat_industrial: ['factory machinery industrial', /factory|industr|machin|warehouse|crane/i],
  cat_solar: ['solar panels renewable energy', /solar|panel/i],
  cat_auto: ['car engine auto parts', /car|engine|auto|wheel|tire|vehicle/i],
  cat_beauty: ['cosmetics skincare products', /cosmetic|beauty|skincare|makeup|serum|lipstick/i],
  cat_gaming: ['gaming setup console controller', /gam|console|controller|joystick/i],
  cat_office: ['office desk workspace supplies', /office|desk|workspace|stationery/i],
  // products
  p_iphone: ['iphone smartphone product', /iphone|phone|smartphone/i],
  p_solar: ['solar panel product', /solar|panel/i],
  p_chair: ['ergonomic office chair', /chair/i],
  p_drill: ['power drill tools industrial', /drill|tool|machin/i],
  p_handbag: ['leather handbag fashion', /bag|handbag|purse|leather/i],
  p_laptop: ['gaming laptop computer', /laptop|computer/i],
  p_brakes: ['car brake disc auto part', /brake|disc|car|auto|wheel/i],
  p_skincare: ['skincare bottles cosmetics', /skincare|cosmetic|bottle|serum|cream/i],
  p_camera: ['security camera device', /camera|cctv|lens/i],
  p_led: ['led flood light lamp', /light|lamp|led|bulb/i],
  p_shoes: ['running shoes sneakers', /shoe|sneaker|footwear/i],
  p_desk: ['standing desk workspace', /desk|table/i],
  // hero / lifestyle
  hero_shopping: ['online shopping ecommerce phone', /shop|phone|ecommerce|bag|cart|delivery/i],
  hero_cargo: ['cargo shipping containers port', /cargo|container|port|ship|freight/i],
}

const pick = async (query, regex) => {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=12`
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`${query}: HTTP ${res.status}`)
  const data = await res.json()
  // Only free, hotlinkable photos (exclude paid Unsplash+ "premium_photo")
  const results = (data.results || []).filter((r) =>
    /images\.unsplash\.com\/photo-/.test(r.urls?.raw || '')
  )
  const matched = results.find((r) => {
    const text = `${r.description || ''} ${r.alt_description || ''} ${r.alternative_slugs?.en || ''}`
    return regex.test(text)
  })
  const chosen = matched || results[0]
  if (!chosen) return null
  // a clean, reasonably sized crop
  const base = chosen.urls.raw
  return `${base}&w=800&h=800&fit=crop&crop=entropy&q=80`
}

const out = {}
for (const [key, [query, regex]] of Object.entries(queries)) {
  try {
    const u = await pick(query, regex)
    out[key] = u
    console.log(`ok   ${key.padEnd(16)} ${u ? u.slice(0, 70) : 'NONE'}`)
  } catch (e) {
    out[key] = null
    console.log(`FAIL ${key.padEnd(16)} ${e.message}`)
  }
  await new Promise((r) => setTimeout(r, 350))
}

const ts = `// Auto-generated curated Unsplash image URLs (free license).
// Re-run scripts/fetch-images.mjs to refresh, or replace any URL with your own.
export const stockImages = ${JSON.stringify(out, null, 2)} as const
`
await writeFile('src/components/chinaconnect/stockImages.ts', ts)
console.log('\nWrote src/components/chinaconnect/stockImages.ts')
