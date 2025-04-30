import { useEffect, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';

import MobileMenu from './MobileMenu';

export default function Header(props) {
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
    <header
      className={`header  ${
        isScrolled ? 'fixed top-0 left-0 w-full ' : null
      } z-50  transition-all duration-500 ease-in-out  ${
        isScrolled ? ' bg-white/10  border-white/20 backdrop-blur-md  shadow-lg ' : 'bg-transparent'
      }`}
      port={props.port}
      id="start"
    >
      <nav
        className={`flex justify-between align-middle ${isScrolled ? null : 'bg-primary'}`}
        style={{
          ...(props.port === 'mobile' ? { padding: '1vh 8vw' } : { padding: '2vh 10vw' }),
        }}
      >
        <p className="text-center">LOGO</p>
        {props.port === 'mobile' ? (
          <MobileMenu port={props.port} />
        ) : (
          <ul className="flex justify-between gap-5">
            <a className="cursor-pointer" href="#inicio">
              Início
            </a>
            <a className="cursor-pointer" href="#sobre">
              Sobre
            </a>
            <a className="cursor-pointer" href="#destaques">
              Destaques
            </a>
            <a className="cursor-pointer" href="#produtos">
              Produtos
            </a>
            <a className="cursor-pointer" href="#contato">
              Contato
            </a>
          </ul>
        )}
      </nav>
    </header>
  );
}

// Usa useState pra controlar se a tela já foi rolada (isScrolled).
// Usa useEffect para adicionar o scroll listener assim que o componente é montado.
// Quando o scroll passa de 0 (ou seja, o usuário começou a rolar), ele muda o estado.
// A classe do header muda com base nesse estado (bg-transparent para bg-white, por exemplo).
