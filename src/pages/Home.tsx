import CategoriesPreview from '../components/CategoriesPreview';
import Hero from '../components/Hero';

import Navigation from '../components/Navigation';
import Products from '../components/Products';
import Promo from '../components/Promo';

function Home() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Products/>
      <Promo/>
      <CategoriesPreview/>
      {/* TODO: Footer */}
    </>
  )
}

export default Home
