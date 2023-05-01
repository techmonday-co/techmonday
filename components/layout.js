import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='site-wrapper overflow-hidden'>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}
