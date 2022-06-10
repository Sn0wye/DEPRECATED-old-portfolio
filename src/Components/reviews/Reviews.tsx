import React, { useLayoutEffect, useState } from "react";
import "./reviews.scss";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { supabase } from "../../services/supabase-config";

type Review = {
  id: string;
  name: string;
  review: string;
  avatar: string;
};

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  async function fetchReviews() {
    try {
      const { data, error } = await supabase.from("Reviews").select("*");
      if (error) throw error;
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  }

  useLayoutEffect(() => {
    fetchReviews();
  }, []);

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
        {reviews &&
          reviews.map(({ avatar, name, review, id }) => {
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
