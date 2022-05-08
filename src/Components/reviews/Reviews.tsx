import React from "react";
import "./reviews.scss";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// type Data = {
//   id: number;
//   name: string;
//   avatar: string;
//   review: string;
// }[];

const data = [
  {
    id: 1,
    avatar:
      "https://media.gettyimages.com/photos/smiling-young-female-afro-owner-against-white-background-picture-id1277534997?s=2048x2048",
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod dolor reiciendis saepe laborum error id fugit sequi aperiam, quibusdam velit cupiditate? Voluptas dignissimos quo alias repellendus neque dicta ab.",
  },
  {
    id: 2,
    avatar:
      "https://media.gettyimages.com/photos/smiling-young-female-afro-owner-against-white-background-picture-id1277534997?s=2048x2048",
    name: "Bob Taylor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod dolor reiciendis saepe laborum error id fugit sequi aperiam, quibusdam velit cupiditate? Voluptas dignissimos quo alias repellendus neque dicta ab.",
  },
  {
    id: 3,
    avatar:
      "https://media.gettyimages.com/photos/smiling-young-female-afro-owner-against-white-background-picture-id1277534997?s=2048x2048",
    name: "Will Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod dolor reiciendis saepe laborum error id fugit sequi aperiam, quibusdam velit cupiditate? Voluptas dignissimos quo alias repellendus neque dicta ab.",
  },
  {
    id: 4,
    avatar:
      "https://media.gettyimages.com/photos/smiling-young-female-afro-owner-against-white-background-picture-id1277534997?s=2048x2048",
    name: "Melinda Gates",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod dolor reiciendis saepe laborum error id fugit sequi aperiam, quibusdam velit cupiditate? Voluptas dignissimos quo alias repellendus neque dicta ab.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews">
      <h5>Review from clients</h5>
      <h2>Reviews</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, id }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
