import Slider from './Slider';
import CardsGrid from './CardsGrid';
import Products from './Products';
import ProductsTest from './ProductsTest';
import About from './About';

export default function Main(props) {
  return (
    <div port={props.port} className=" bg-gray-100" id="inicio">
      <Slider port={props.port} />
      <About port={props.port} />
      <section id="destaques">
        <div
          className="text-container"
          style={props.port === 'mobile' ? { margin: '3vh 6vw' } : { margin: '4vh 8vw' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Mais Vendidos</h2>
          <p className="mt-2 text-gray-600">
            Confira os produtos mais procurados pelos nossos clientes. Qualidade, confiança e ótimo
            custo-benefício reunidos em uma seleção especial.
          </p>
        </div>
        <CardsGrid port={props.port} />
      </section>
      <section id="produtos">
        <Products port={props.port} />
      </section>
    </div>
  );
}
