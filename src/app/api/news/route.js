import connectMongoDB from '@/libs/mongodb'
import News from '@/models/news'

import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, imagePath } = await request.json()
  await connectMongoDB()
  await News.create({ title, imagePath })
  return NextResponse.json({ message: 'Topic Created' }, { status: 201 })
}

export async function GET(req) {
  const url = new URL(req.url)
  const searchParams = new URLSearchParams(url.searchParams)

  await connectMongoDB()
  const news = await News.find().sort({ updatedAt: -1 }).limit(searchParams.get('limit'))
  return NextResponse.json({ news })
}
