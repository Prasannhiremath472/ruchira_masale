import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import UspStrip from './sections/UspStrip';
import About from './sections/About';
import Categories from './sections/Categories';
import Products from './sections/Products';
import Quality from './sections/Quality';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <UspStrip />
        <About />
        <Categories />
        <Products />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
