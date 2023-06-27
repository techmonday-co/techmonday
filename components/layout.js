import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import OffcanvasMenu from '../components/offcanvas-menu'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='site-wrapper overflow-hidden'>
        <Header />
        {children}
        <Footer />

        <OffcanvasMenu />
      </div>
    </>
  )
}
