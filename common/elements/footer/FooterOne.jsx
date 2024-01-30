import Image from 'next/image';
import Link from "next/link";

const FooterOne = ({categories, tags, authors}) => {
  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem('color-mode');
  }

  function renderCollection(name, collection, collectionName, allCollectionName) {
    if (collection === undefined) {
      return <></>;
    }

    return (
      <div className="footer-widget">
        <h2 className="title">{collectionName}</h2>
        <div className="inner">
          <ul className="ft-menu-list">
            { collection.map((item, index) => {
              return (
                <li key={`footer-tag-${index}`}>
                  <Link href={`/${name}/${item.slug}`}>
                    {item.name}
                  </Link>
                </li>
              )
            })}
            <li>
              <a href={`/${name}`}>{allCollectionName}</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="footer-mainmenu">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Program</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <a href="/podcasts">Podcasts</a>
                    </li>
                    <li>
                      <a href="/series">The Series</a>
                    </li>
                    <li>
                      <a href="/">กว่าจะมาเป็น</a>
                    </li>
                    <li>
                      <a href="/careerhub">CareerHub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              { renderCollection('categories', categories, 'Categories', 'All Categories') }
            </div>
            {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              { renderCollection('tags', tags, 'Trending', 'All Topics') }
            </div> */}
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              { renderCollection('authors', authors, 'Author', 'All Authors')}
            </div>
            
            {/* <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Event</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <a href="#">Meetup 1</a>
                    </li>
                    <li>
                      <a href="#">Meetup 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">About</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/techmonday.co">Facebook Page</a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=eGtAVP-Kwdg&list=PL82kn57c7yOdeptwxg8eMF97K_GtcftP4">Youtube Channel</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer Top Area  */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="dark-logo"
                    src="/images/logo.svg"
                    alt="Logo Images"
                    height={37}
                    width={141}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              {/* Start Post List  */}
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                <ul className="social-icon color-tertiary md-size justify-content-start">
                  <li>
                    <a href="https://www.facebook.com/techmonday.co" rel="noopener" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=eGtAVP-Kwdg&list=PL82kn57c7yOdeptwxg8eMF97K_GtcftP4">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Post List  */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top Area  */}
      {/* Start Copyright Area  */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="copyright-left">
                <ul className="mainmenu justify-content-start">
                  <li>
                    <Link href="/contact-us"
                          className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Contact Us">Contact Us</span>
                        </span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/privacy-policy"
                          className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Privacy Policy">Privacy Policy</span>
                        </span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="copyright-right text-start text-md-end mt_sm--20">
                <p className="b3">
                  All Rights Reserved © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area  */}
    </div>
  );
};

export default FooterOne;
