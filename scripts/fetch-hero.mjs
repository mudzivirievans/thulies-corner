// Clean, magazine/studio-style product hero candidates. Free only.
const queries = [
  'product photography minimal studio',
  'luxury handbag studio',
  'sneakers studio minimal',
  'perfume bottle studio',
  'headphones product studio',
  'fashion accessories flatlay clean',
]

const fetchTop = async (query) => {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=24`
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  const data = await res.json()
  const free = (data.results || [])
    .filter((r) => /images\.unsplash\.com\/photo-/.test(r.urls?.raw || ''))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 4)
  console.log(`\n### ${query}`)
  for (const r of free) {
    const desc = (r.description || r.alt_description || '').slice(0, 58)
    const ratio = (r.width / r.height).toFixed(2)
    const u = `${r.urls.raw}&w=1200&q=80&fit=crop`
    console.log(`likes=${String(r.likes).padStart(5)} ratio=${ratio} | ${desc}`)
    console.log(`   ${u}`)
  }
}

for (const q of queries) {
  try { await fetchTop(q) } catch (e) { console.log(`FAIL ${q}: ${e.message}`) }
  await new Promise((r) => setTimeout(r, 350))
}
