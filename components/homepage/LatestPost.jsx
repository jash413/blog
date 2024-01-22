"use client";

import React, { useState, useEffect } from "react";
import style from "../../styles/latestpost.module.css";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LatestPost = ({ blogs }) => {
  const latestBlogs = blogs?.slice(0, 4);

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper && swiper !== null) {
      const interval = setInterval(() => {
        swiper?.slideNext();
      }, 2500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [swiper]);

  return (
    <div className={style.latestPostDiv}>
      <div className={style.latestPostHeader}>
        <h3>
          Latest <span style={{ color: "#592DC8" }}>Posts</span>
        </h3>
        <div className={style.latestPostHeaderLink}>
          <span>View All</span>
          <img src="./sidearrow.png" alt="img" />
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        className={style.latestPostList}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {latestBlogs?.map((blog, index) => (
          <>
            <SwiperSlide className={style.latestPostListItem} key={index}>
              <Link
                href={`/${blog?.slug}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className={style.latestPostListItemImg}>
                  <Image
                    src={blog?.image_blog.public_id}
                    alt="img"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={style.latestPostListItemContent}>
                  <h4 className={style.latestPostItemTitle}>{blog?.title}</h4>
                  <p className={style.latestPostItemDate}>
                    {blog?.date} - 4 min read
                  </p>
                  <p className={style.latestPostItemPara}>
                    {blog?.meta_description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestPost;
