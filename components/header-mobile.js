import Link from 'next/link'
import Image from 'next/image'
import styles from './header-mobile.module.css'

export default function HeaderMobile() {
  return (
    <div id="header-mobile" className="visible lg:invisible h-16 bg-white relative">
      <div className='flex items-center justify-between w-full px-4'>
        <div className='branding'>
          <div 
            className='logo'
          >
            <Link href="/">
              <a 
                className={`block leading-none ${styles.logoLink}`}
              >
                <Image
                  src='/logo-mobile.svg'
                  width={38}
                  height={38}
                  className=''
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
