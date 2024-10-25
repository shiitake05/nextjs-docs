// 'use client'
import type { Metadata } from 'next'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}

// export default function Page() {
//   const router = useRouter()

//   return (
//     <button type="button" onClick={() => router.push('/dashboard')}>
//       Dashboard
//     </button>
//   )
// }