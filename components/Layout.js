import Navbar from './Navbar'
import Footer from './Footer'
import SearchBar from './SearchBar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SearchBar/>
      <main>{children}</main>
      <Footer />
    </>
  )
}