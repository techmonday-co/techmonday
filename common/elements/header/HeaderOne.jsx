import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const HeaderOne = ({pClass, darkLogo, lightLogo, postData}) => {
  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem('color-mode');
  }

  const [showMMenu, SetShowMMenu] = useState(false);
    
  const MobileShowHandler = () => SetShowMMenu(true);  
  const MobileHideHandler = () => SetShowMMenu(false);  

  const [togglaClass, setTogglaClass] = useState(false);

  const toggleHandler = () => {
    setTogglaClass(active => !active);
  }
    
  return (
    <>
      <header className={`header axil-header ${pClass || ""}`}>
        <div className="header-wrap">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="dark-logo"
                    width={141}
                    height={37}
                    src={(colorMode === "Dark" ? lightLogo || "/images/logo.svg" : darkLogo || "/images/logo.svg") || "/images/logo.svg" }
                    alt="Tech Monday logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 d-none d-xl-block">
              <div className="mainmenu-wrapper">
                <nav className="mainmenu-nav">
                  <Nav posts={postData}/>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderOne;