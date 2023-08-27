import Image from 'next/image';
import HomeBanner from './components/homebanner';
import AboutMinister from './components/aboutMinister';
import News from './components/news';

export default function Home() {
  return (
    <div className='font-poppins'>
      <HomeBanner></HomeBanner>
      <AboutMinister></AboutMinister>
      <News></News>
    </div>
  )
}
