import { Navbar } from './components/Navbar';
import { Pricing } from './components/Pricing';
import { Header } from './components/Header';

function App() {
  return (
    <div className="w-full h-full bg-[#0F172A] font-inter">
      <Header />
      <Navbar />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <Pricing />
      </main>
    </div>
  );
}

export default App;
