import ContactHeader from '@/components/ContactHeader'
import Navigation from '@/components/Navigation'
import Process from '@/components/Process'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">

      <Navigation />
      <ContactHeader />
      <Process/>
    </main>
  )
}
