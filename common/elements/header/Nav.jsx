import Link from 'next/link'

const Nav = () => {    
  return (
    <ul className="mainmenu">
      <li className="menu-item-has-children">
        <Link href="/categories/software-development">
          Software Development
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/categories/data-ai">
          Data & AI
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/categories/marketing">
          Marketing
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/categories/security">
          Security
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
