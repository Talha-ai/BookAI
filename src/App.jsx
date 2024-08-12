import React from 'react';
import Navbar from './components/Navbar';
import { Pricing } from './components/Pricing';
import { Header } from './components/Header';

function App() {
  return (
    <div className="w-full h-full bg-[#0F172A]">
      <Header />
      <Navbar />
      <div className="body py-8">
        <Pricing />
      </div>
    </div>
  );
}

export default App;
