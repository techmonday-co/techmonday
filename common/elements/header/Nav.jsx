import Link from 'next/link'

const Nav = () => {    
  return (
    <ul className="mainmenu">
      <li className="menu-item-has-children">
        <Link href="/podcasts">
          Podcasts
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
      <li className="menu-item-has-children">
        <Link href="/series">
          The Series
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
      <li className="menu-item-has-children">
        <Link href="/">
          กว่าจะมาเป็น
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
