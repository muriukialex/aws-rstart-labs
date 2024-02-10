export const dynamic = "force-dynamic"

export async function POST() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    method: "POST",
    body: JSON.stringify({ time: new Date().toISOString() }),
  })

  const data = await res.json()

  return Response.json(data)
}
