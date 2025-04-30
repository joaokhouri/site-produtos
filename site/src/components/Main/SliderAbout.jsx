import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';

export default function SliderAbout(props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      loop={true}
      spaceBetween={50}
      slidesPerView={props.port === 'mobile' ? 1 : 3}
      style={{ padding: '2vh 2vw' }}
    >
      <SwiperSlide className="shadow-md" style={{ padding: '18px' }}>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Qualidade e confiança</h3>
        <p className="text-gray-600">
          Produtos testados e aprovados para garantir a sua satisfação.
        </p>
      </SwiperSlide>
      <SwiperSlide className="shadow-md" style={{ padding: '18px' }}>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Entregamos em todo o Brasil</h3>
        <p className="text-gray-600">Receba seu pedido em qualquer lugar do país com segurança.</p>
      </SwiperSlide>
      <SwiperSlide className="shadow-md" style={{ padding: '18px' }}>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Pagamento seguro</h3>
        <p className="text-gray-600">Utilizamos plataformas confiáveis para sua tranquilidade.</p>
      </SwiperSlide>
      <SwiperSlide className="shadow-md" style={{ padding: '18px' }}>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Produtos Selecionados</h3>
        <p className="text-gray-600">
          Oferecemos apenas itens de alta qualidade, escolhidos com rigor para garantir a sua
          satisfação.
        </p>
      </SwiperSlide>
      <SwiperSlide className="shadow-md" style={{ padding: '18px' }}>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Suporte Personalizado</h3>
        <p className="text-gray-600">
          Conte com atendimento rápido e atencioso para tirar dúvidas e acompanhar seu pedido do
          início ao fim.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
