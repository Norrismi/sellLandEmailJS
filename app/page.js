import ContactHeader from '@/components/ContactHeader'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Process from '@/components/Process'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col">

      <Navigation />
      <ContactHeader />
      <Process/>
      <Footer/>
    </main>
  )
}
