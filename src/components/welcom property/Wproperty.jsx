import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import Item from "../item/Item";
import { PROPERTIES } from "../../shared/data";
import "../welcom property/Wproperty.css"; 

export default function Wproperty() {
  return (
    <section className="properties-container">
      <div className="properties-background">
        <span className="properties-subtitle">Your Future Home Awaits!</span>
        <h2 className="properties-title">Find Your Dream Here</h2>
        <div className="properties-header">
          <h5>
            <span className="font-bold">Showing 1-9</span> out of 3k properties
          </h5>
          <Link to="/" className="settings-icon">
            <VscSettings />
          </Link>
        </div>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1124: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="properties-slider"
        >
          {PROPERTIES.map((property) => (
            <SwiperSlide key={property.title}>
              <Item property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
