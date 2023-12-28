'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

//* importamos el modulo de css es importante que tenga el .module.css para se pueda importar
import style from './ActiveLink.module.css';

interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({ path, text }: Props) => {

    // * para saber si el link esta activo
    // * esto solo se puede usar del lado del cliente, debemos especificar el 'use client' en la parte más alta del componente
    const pathName = usePathname()

  return (
    <Link 
        key={path} 
        // * usamos el stilo creado en el archivo importado
        className={ `${style.link} ${ (path === pathName) ? style['active-link'] : '' } ` } 
        href={path}>
        {text}
    </Link>
  )
}
