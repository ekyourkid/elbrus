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
      {/* <HeroSlider /> */}
      <JumboArticle />
      <div className='p-10 px-20'>
        <CardArticle />
      </div>
      <EventBanner />
      <ArticleList />
      <div className='py-36 px-20 flex flex-col space-y-20'>
        <MerchCatalog />
        <CTABanner />
      </div>
      <Contact />
    </main>
  )
}
