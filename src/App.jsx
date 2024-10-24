import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import Chip from './components/Chip';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar className="overflow-x-hidden" />
      <Hero className="overflow-x-hidden" />
      <Highlights className="overflow-x-hidden" />
      <Model className="overflow-x-hidden" />
      <Features className="overflow-x-hidden" />
      <Chip className="overflow-x-hidden" />
      <Footer className="overflow-x-hidden" />
    </main>
  );
};

export default App;
