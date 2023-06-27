import Link from 'next/link'
import Image from 'next/image'
import styles from './header-mobile.module.css'

export default function HeaderMobile() {
  return (
    <div id="header-mobile" className="visible lg:invisible bg-white relative shadow">
      <div className='flex items-center justify-between w-full px-4'>
        <div className='branding'>
          <div 
            className='logo py-2'
          >
            <Link
              href="/"
              className={`block leading-none ${styles.logoLink}`}
            >
              <Image
                src='/logo-mobile.svg'
                width={38}
                height={38}
                className=''
              />
            </Link>
          </div>
        </div>
        <div>
          <i className={`mdicon mdicon-menu text-xl ${styles.offCanvasMenu}`}></i>
        </div>
      </div>
    </div>
  )
}
