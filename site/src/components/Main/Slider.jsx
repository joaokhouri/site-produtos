import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import LanternaDesktop from '../../assets/DesktopImages/LANTERNASDESKTOP.png';
import LanternaMobile from '../../assets/MobileImages/LANTERNASMOBILE.png';
import DifusoresDesktop from '../../assets/DesktopImages/DIFUSORESDESKTOP.png';
import DifusoresMobile from '../../assets/MobileImages/DIFUSORESMOBILE.png';
import UtensiliosDesktop from '../../assets/DesktopImages/UTENSILIOSDESKTOP.png';
import UtensiliosMobile from '../../assets/MobileImages/UTENSILIOSMOBILE.png';
import FonesDesktop from '../../assets/DesktopImages/FONESDESKTOP.png';
import FonesMobile from '../../assets/MobileImages/FONESMOBILE.png';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import 'swiper/css/effect-fade';

const imagesDesktop = [
  {
    id: 1,
    image: LanternaDesktop,
    name: 'Lanternas de vários tipos: lanternas pequenas, holofotes, recarregáveis, e a pilhas',
  },
  { id: 2, image: DifusoresDesktop, name: 'Difusores e Umidificadores de ar' },
  { id: 3, image: UtensiliosDesktop, name: 'Utensílios domésticos' },
  { id: 4, image: FonesDesktop, name: 'Fones de ouvido: Headset, Superbass, e fones bluetooth' },
];

const imagesMobile = [
  {
    id: 1,
    image: LanternaMobile,
    name: 'Lanternas de vários tipos: lanternas pequenas, holofotes, recarregáveis, e a pilhas',
  },
  { id: 2, image: DifusoresMobile, name: 'Difusores e Umidificadores de ar' },
  { id: 3, image: UtensiliosMobile, name: 'Utensílios domésticos' },
  { id: 4, image: FonesMobile, name: 'Fones de ouvido: Headset, Superbass, e fones bluetooth' },
];

export default function Slider(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      effect="fade"
      centeredSlides={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {props.port === 'mobile'
        ? imagesMobile.map((img) => (
            <SwiperSlide index={img.id}>
              <img
                src={img.image}
                alt={img.name}
                className="self-center max-w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))
        : imagesDesktop.map((img) => (
            <SwiperSlide index={img.id}>
              <img
                src={img.image}
                alt={img.name}
                className="self-center max-w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}

//className="self-center max-w-full h-auto object-cover"
