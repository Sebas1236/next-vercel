import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
    return (
        // <MainLayout>
        // <DarkLayout>
        <>
            <h1>About Page</h1>
            <Link href="/">
                <h2 className={inter.className}>
                    Ir a Home <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
            </Link>
        </>
        // </DarkLayout>
        // </ MainLayout>
    );
};
