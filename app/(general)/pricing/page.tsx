import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Página de Precios',
 description: 'Página de Precios',
 keywords: ['Precios', 'Barato', 'Rebajas']
};
export default function PricingPage(){
    return(
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}