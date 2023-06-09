import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
} from "swiper";

import { Box, Typography } from "@mui/material";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import "../../styles/SlideSwiper.css";
const images = [
  "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150751.jpg?size=626&ext=jpg&ga=GA1.2.661182646.1670135593&semt=ais",
  "https://img.freepik.com/premium-photo/modern-house-with-sky_35076-483.jpg?size=626&ext=jpg&ga=GA1.1.661182646.1670135593&semt=ais",
  "https://img.freepik.com/free-photo/architecture-nature-merge-modern-design-generative-ai_188544-9636.jpg?size=626&ext=jpg&ga=GA1.1.661182646.1670135593&semt=ais",
  "https://img.freepik.com/free-photo/luxury-house-real-estate-sale-property-generative-ai_169016-29360.jpg?size=626&ext=jpg&ga=GA1.1.661182646.1670135593&semt=ais",
  "https://img.freepik.com/premium-photo/3d-rendering-modern-classic-house-with-luxury-garden_105762-111.jpg?size=626&ext=jpg&ga=GA1.1.661182646.1670135593&semt=ais",
];
const SlideSwiper = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box sx={{ display: "grid", justifyContent: "center", marginTop: "50px" }}>
      <Box
        sx={{
          width: { xs: "95vw", sm: "90vw", md: "90vw", lg: "80vw" },
          height: { xs: "30vh", sm: "40vh", md: "80vh", lg: "90vh" },
          "@media (max-width:290px)": {
            width: "340px",
          },
        }}
      >
        {/* <Box sx={{ marginTop: "200px" }}>
          <ArrowBackIosNewOutlinedIcon
            sx={{ color: "white", fontSize: "50px" }}
          />
        </Box> */}
        <Swiper
          className="swiperContainer"
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={{ el: ".swiperPagination", clickable: true }}
          // navigation={{ nextEl: ".swiperNext" }}
          modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
          grabCursor={true}
          effect="coverflow"
          centeredSlides={true}
          slidePreView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          auto
        >
          {images.map((item, index) => (
            <SwiperSlide kry={index} className="slide">
              <img
                src={item}
                alt="Slider Images"
                style={{ width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <ArrowBackIosNewOutlinedIcon
              sx={{ color: "black", fontSize: "50px" }}
            />
          </Box>
          <Box>
            <ArrowForwardIosOutlinedIcon
              className="swiperNext"
              sx={{ color: "black", fontSize: "50px" }}
            />
          </Box>
        </Box> */}

        <Box
          // className=""
          sx={{
            marginTop: "10px",
            height: "100px",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            display: { xs: "none", lg: "flex" },
            // marginBottom: "100px",
          }}
        >
          {images.map((item, index) => (
            <Box
              sx={{
                width: "200px",
                height: "100%",

                // border: isActive ? "" : "",
              }}
            >
              <img
                className="swiperPagination"
                src={item}
                alt="Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SlideSwiper;
