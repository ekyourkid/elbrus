import HeroSlider from './components/hero'
import JumboArticle from './components/jumbo-article'
import CardArticle from './components/card-article'
import EventBanner from './components/event-banner'
import ArticleList from './components/article-list'
import CTABanner from './components/cta-banner'
import CardMerch from './components/card-merch'

const ARTICLE_LIST = [
  { id: 0, title: 'Test Article 1', desription: '', image: '' },
  { id: 1, title: 'Test Article 1', desription: '', image: '' },
  { id: 2, title: 'Test Article 1', desription: '', image: '' },
  { id: 3, title: 'Test Article 1', desription: '', image: '' },
]

const MERCH_LIST = [
  { id: 0, title: 'Merch 1', desription: '', price: 100000, image: '/images/merch.png' },
  { id: 1, title: 'Merch 2', desription: '', price: 100000, image: '/images/merch.png' },
  { id: 2, title: 'Merch 3', desription: '', price: 100000, image: '/images/merch.png' },
  { id: 3, title: 'Merch 4', desription: '', price: 100000, image: '/images/merch.png' },
]

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      <HeroSlider />
      <JumboArticle />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full justify-items-center gap-10 p-8 md:p-20 md:py-0 md:pb-20">
        {ARTICLE_LIST.map((item, index) =>
          <CardArticle key={index} item={item} />
        )}
      </div>
      <EventBanner />
      <ArticleList />
      <div className="bg-[#F5F4F4] p-8 md:p-20">
        <div className="pb-5">
          <h1 className="uppercase text-xl lg:text-2xl font-bold cursor-pointer">
            merch <span className="text-red-600">.</span>
          </h1>
        </div>
        <div className=" grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-items-center gap-10">
          {MERCH_LIST.map((item, index) =>
            <CardMerch key={index} item={item} />
          )}
        </div>
      </div>
      <CTABanner />
    </main>
  )
}
