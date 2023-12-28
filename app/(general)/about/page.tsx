import type { Metadata } from "next";

// * tipo metadata
// * se utiliza cuando los datos son estaticos que NO provienen de una bbdd o algo externo
export const metadata: Metadata = {
 title: 'Página de about',
 description: 'Página de about',
 keywords: ['about page', 'Marco Andrés', 'etc']
};

export default function AboutPage() {
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}