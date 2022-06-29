// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

export function CarouselImages ({images}) {
  return(
    <Swiper
      navigation={true} modules={[Navigation]}
      className="h-96 lg:w-3/5 mx-auto"
    >
      {
        images.map((image, i) => <SwiperSlide key={`${image} ${i}`}>
            <img src={image} className="w-full h-full object-contain" /> 
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}