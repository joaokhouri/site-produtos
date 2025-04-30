const buttonStyleML = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  fontWeight: '500',
  textDecoration: 'none',
  borderRadius: '5px',
  justifyContent: 'center',
  gap: '5px',
  backgroundColor: '#FEE700',
  borderStyle: 'none',
  color: '#3F3B6C',
  cursor: 'pointer',
  width: '100%',
};

const buttonStyleSP = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  fontWeight: '500',
  textDecoration: 'none',
  borderRadius: '5px',
  gap: '5px',
  backgroundColor: '#F94D2E',
  borderStyle: 'none',
  color: 'white',
  cursor: 'pointer',
  width: '100%',
  justifyContent: 'center',
};

export default function Card(props) {
  return (
    <div
      key={props.index}
      className={`flex-shrink-0 min-w-[70%] md:min-w-0 bg-white p-4 rounded-2xl shadow-md text-center hover:scale-105 transition-transform flex flex-col items-center gap-2`}
      style={{ padding: '16px' }}
    >
      <img src={props.image} alt={props.name} className="mx-auto" />
      <h3 className="font-bold">{props.name}</h3>
      <p className="font-light">{props.description}</p>
      <a href={props.link} target="_blank" className="w-full">
        <button style={props.button == 'Mercado Livre' ? buttonStyleML : buttonStyleSP}>
          <p>{props.button}</p>
        </button>
      </a>
    </div>
  );
}
