import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
    return (
        // <MainLayout>
        <>
            <h1>Contact Page</h1>
            <Link href="/">
                <h2 className={inter.className}>
                    Ir a Home <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
            </Link>
        </>

        // </MainLayout>

    )
}
