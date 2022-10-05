import Navbar from './Navbar'
import Footer from './Footer'
import SearchBar from './SearchBar'
import SearchOptions from './SearchOptions'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SearchBar/>
      <SearchOptions/>
      <main>{children}</main>
      <Footer />
    </>
  )
}