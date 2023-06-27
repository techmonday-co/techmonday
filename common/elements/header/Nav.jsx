import Link from 'next/link'

const Nav = () => {    
  return (
    <ul className="mainmenu">
      <li className="menu-item-has-children">
        <a href="#">Home</a>
        <ul className="axil-submenu">
          <li>
            <Link href="/"
                  className="hover-flip-item-wrapper"
            >            
              <span className="hover-flip-item">
                <span data-text="Home Default">Home Default</span>
              </span>                
            </Link>
          </li>
          <li>
            <Link href="/creative-blog"
                  className="hover-flip-item-wrapper"
            >
              <span className="hover-flip-item">
                <span data-text="Home Creative Blog">Home Creative Blog</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/seo-blog"
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Home SEO Blog">Home SEO Blog</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/tech-blog"
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Home Tech Blog">Home Tech Blog</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/lifestyle-blog"
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Home Lifestyle Blog">Home Lifestyle Blog</span>
              </span>
            </Link>
          </li>
          <li>
            <a href="https://new.axilthemes.com/demo/react/blogar-rtl" className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="RTL Version">RTL Version</span>
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="/">
          Post
        </Link>
        <ul className="axil-submenu">
          <li>
            <Link href="/post/beauty-of-deep-space-billions-of-galaxies-in-the-universe."
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Post Format Standard">Post Format Standard</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/post/flutter-the-good-the-bad-and-the-ugly"
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Post Format Video">Post Format Video</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/post/fashion-young-handsome-man-in-casual-watch"
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Post Format Gallery">Post Format Gallery</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/post/lightweight-grippable-and-ready-to-go"
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Post Format Audio">Post Format Audio</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/post/new-freehand-templates-built-for-the-whole-team"
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text="Post Format Quote">Post Format Quote</span>
              </span>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Nav;
