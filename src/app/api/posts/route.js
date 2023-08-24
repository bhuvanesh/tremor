import { NextResponse } from 'next/server'

import { prisma } from '@/app/lib/prisma'
 
export async function POST(request) {
  const res = await request.json()
  const res2 = await prisma.post.create({
    data: {
        title: res.name,
        content: res.message
    }  
  })
  return NextResponse.json({ message: res2})
}

export async function GET() {
    const res = await prisma.post.findMany(
    //     {
    //     where: {
    //         id: 2
    //     }
    // }
    )
    return NextResponse.json({response: res})
}