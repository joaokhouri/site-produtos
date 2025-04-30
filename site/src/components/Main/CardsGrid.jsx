import Card from '../../models/Card';
import itemEx from '../../itemEx.json';

export default function CardsGrid(props) {
  return (
    <section
      className={
        props.port === 'mobile'
          ? 'flex gap-4 justify-evenly overflow-x-scroll md:py-[10vh]'
          : 'grid grid-cols-4 gap-8 '
      }
      style={props.port === 'mobile' ? { padding: '0vh 5vw' } : { padding: '3vh 18vw' }}
    >
      {itemEx.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          link={item.link}
          description={item.description}
          button={
            item.link.includes('mercadolivre')
              ? 'Mercado Livre'
              : item.link.includes('shopee')
              ? 'Shopee'
              : 'Ver produto'
          }
        />
      ))}
    </section>
  );
}
