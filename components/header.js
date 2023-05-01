import Link from 'next/link'
import HeaderMobile from './header-mobile.js'

export default function Header() {
  return (
    <header className="bg-transparent border-solid border-b-0 border-b-teal-900 p-0 shadow-none">
      <HeaderMobile />
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      .
    </header>
  )
}
