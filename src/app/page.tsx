import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <Link href="/about">
        <h2 className={inter.className}>
          About <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </Link>
    </MainLayout>
  )
}
