import Image from 'next/image'
import HeroSlider from './components/hero'
import JumboArticle from './components/jumbo-article'
import CardArticle from './components/card-article'
import Contact from './components/contact'
import EventBanner from './components/event-banner'
import ArticleList from './components/article-list'
import MerchCatalog from './components/merch-catalog'
import CTABanner from './components/cta-banner'

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      <HeroSlider />
      <JumboArticle />
      <div className=''>
        <CardArticle />
      </div>
      <EventBanner />
      <ArticleList />
        <MerchCatalog />
      <div className='p-5'>
        <CTABanner />
      </div>
      <Contact />
    </main>
  )
}
