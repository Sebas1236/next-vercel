'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";    
import { CSSProperties, FC } from "react";

interface Props {
    text: string,
    href: string,
};

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
};

export const ActiveLink: FC<Props> = ({ text, href }) => {

    //Ya no existe
    // const { asPath } = useRouter();

    const pathname  = usePathname();

    return (
        <Link href={href} style={ pathname === href ? style : undefined }>{ text }</Link>
    )
}
