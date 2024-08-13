import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`py-8 ${
        theme === 'dark' ? 'bg-[#6366F1]' : 'bg-indigo-500'
      } flex justify-center items-center`}
    >
      <h1
        className={`text-[32px] sm:text-[40px] mb-4 font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-100'
        }`}
      >
        Book Generator API
      </h1>
    </header>
  );
};
