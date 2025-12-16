import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json('Welcome to the API root')
})


export const GET = handle(app)
export const POST = handle(app)