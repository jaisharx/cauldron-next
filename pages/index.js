import Footer from 'components/footer'
import Navbar from 'components/navbar'
import MainSection from 'components/page-sections/home/hero-section'
import SectionOne from 'components/page-sections/home/section-one'


export default function Home() {
  return (
    <>
        <Navbar/>
        <MainSection/>
        <SectionOne/>
        <Footer/>
    </>
  )
}
