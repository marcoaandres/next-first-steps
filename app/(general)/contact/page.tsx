import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Página de Contacto',
 description: 'Página de Contacto',
 keywords: ['Pagína de contacto', 'contacto', 'contact']
};
export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}