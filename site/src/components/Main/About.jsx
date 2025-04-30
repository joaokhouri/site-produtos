import SliderAbout from './SliderAbout';

export default function About(props) {
  return (
    <section
      className="py-16 bg-gray-100"
      id="sobre"
      port={props.port}
      style={props.port === 'mobile' ? { margin: '3vh 6vw' } : { margin: '4vh 8vw' }}
    >
      <div
        className="m flex flex-col "
        style={props.port === 'mobile' ? { padding: '2vh 0' } : { paddingBottom: '5vh' }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Por que escolher a gente?</h2>
        <p className="mt-2 text-gray-600">Na hora de comprar, confiança faz toda a diferença.</p>
      </div>
      <SliderAbout port={props.port} />
    </section>
  );
}
