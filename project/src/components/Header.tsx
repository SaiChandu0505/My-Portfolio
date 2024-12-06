import { ArrowDown } from 'lucide-react';

export function Header() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 text-white text-center relative">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-slideUp">
          Full Stack Developer
        </p>
        <button
          onClick={scrollToAbout}
          className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ArrowDown className="text-white" size={24} />
        </button>
      </div>
    </header>
  );
}