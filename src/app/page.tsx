import Image from 'next/image'
import HeroSlider from './components/hero'

export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <HeroSlider/>
    </main>
  )
}
