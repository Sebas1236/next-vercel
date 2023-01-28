import Link from 'next/link';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
    return (
        <>
            <h1>Pricing Page</h1>
            <Link href="/">
                <h2 className={inter.className}>
                    Ir a Home <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
            </Link>
        </>
    );
};
