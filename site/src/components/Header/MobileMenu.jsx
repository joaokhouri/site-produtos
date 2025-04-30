import { Fade as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';

export default function MobileMenu(props) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpar o listener ao desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Hamburger size={20} toggle={setOpen} toggled={open} color={open ? '#FFFFFF' : '#000000'} />
      {open && (
        <div
          className={`absolute top-0 left-0 w-full z-100 h-full bg-white ${
            open ? 'animate-fade-in' : 'animate-fade-out'
          }`}
          style={{
            ...(props.port === 'mobile' ? { padding: '1vh 8vw' } : { padding: '2vh 10vw' }),
            ...(isScrolled
              ? { background: 'rgba(255, 210, 3, 0.89)', height: '100vh' }
              : { background: 'rgba(255, 210, 3, 0.89)' }),
          }}
        >
          <header className="flex justify-end">
            <Hamburger size={20} toggle={setOpen} toggled={open} />
          </header>
          <ul className="flex flex-col items-center gap-[2vh]">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#destaques">Destaques</a>
            <a href="#produtos">Produtos</a>
            <a href="#contato" toggle={setOpen} toggled={open}>
              Contato
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}
