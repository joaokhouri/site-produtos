import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import useResponsive from './hooks/useResponsive';
import './App.css';

function App() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const options = [
    { value: 'desktop', condition: isDesktop },
    { value: 'tablet', condition: isTablet },
    { value: 'mobile', condition: isMobile },
  ];

  const foundOption = options.find((option) => option.condition);
  const result = foundOption ? foundOption.value : 'detectando'; // safe fallback

  return (
    <div className="scroll-smooth">
      <Header port={result} />
      <Main port={result} />
      <Footer port={result} />
    </div>
  );
}

export default App;
