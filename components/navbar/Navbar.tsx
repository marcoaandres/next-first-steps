
import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '../';

// * arreglo para redireccioanamiento a las direntes páginas
const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]



export const Navbar = () => {

  console.log("Navbar creado...")

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

      <Link href={'/'} className='flex items-center'>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {/* <Link className='mr-2' href="/about">About</Link>
      <Link className='mr-2' href="/pricing">Pricing</Link>
      <Link className='mr-2' href="/contact">Contact</Link> */}

      {
        navItems.map( navItem => (
            // <Link key={navItem.path} className='mr-2' href={navItem.path}>{navItem.text}</Link>
            // * enviamos todos las propiedades con el operador spred(...) 
          <ActiveLink key={navItem.path} { ...navItem }  />
        ))
      }


    </nav>
  )
}