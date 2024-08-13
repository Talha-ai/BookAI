import { Navbar } from './components/Navbar';
import { Pricing } from './components/Pricing';
import { Header } from './components/Header';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full min-h-screen ${
        theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
      } font-inter`}
    >
      <Header />
      <Navbar />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <Pricing />
      </main>
    </div>
  );
}

export default App;
