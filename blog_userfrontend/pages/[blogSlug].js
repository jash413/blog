import React from "react";
import Footer from "../components/Footer";
import style from "../styles/blog.module.css";
import { getBlogBySlug, getBlogs } from "../api";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Blog = ({ blog, blogs }) => {
  return (
    <>
      <Head>
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_description} />
        <meta name="keywords" content={blog.meta_keywords} />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className={style.blogMainImage}>
        <Image
          src={blog.image_blog.public_id}
          alt="blog image"
          width={1920}
          height={1080}
          layout="responsive"
        />
        {
          <div className={style.userDivActive}>
            {blog.categories_names.map((category) => (
              <span className={style.blogCategory}>{category}</span>
            ))}
            <h1>{blog.title}</h1>
          </div>
        }
      </div>
      <div className={style.blogContent}>
        <div className={style.userDetailsBigScreen}>
          {blog.categories_names.map((category) => (
            <span className={style.blogCategory}>{category}</span>
          ))}
          <h1>{blog.title}</h1>
        </div>
        <div className={style.blogUserDetails}>
          <div className={style.userInfo}>
            <span>{blog.author}</span>
            <span>Publish On {blog.date}</span>
            <span className={style.blogLength}>2 min read</span>
          </div>
        </div>

        <div className={style.blogContentDetails}>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
        <div className={style.blogHashtags}>
          {blog.hashtags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <div className={style.relatedBlogs}>
          <h3>Related Blogs</h3>
          <Swiper slidesPerView={"auto"} className={style.relatedBlogContainer}>
            {blogs
              .filter((blogs) => {
                return blogs.hashtags.some((hashtag) =>
                  blog.hashtags.includes(hashtag)
                );
              })
              .slice(0, 5)
              .map((blog, index) => (
                <SwiperSlide
                  key={index}
                  className={style.relatedBlogCard}
                  style={{
                    backgroundImage: `linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.8)), url('${blog.image_blog.url}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Link
                    href={`/${blog?.slug}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div className={style.categoryTag}>
                      <span>{blog.categories_names[0]}</span>
                    </div>
                    <div className={style.blogTitle}>
                      <h3>{blog.title}</h3>
                    </div>
                    <div className={style.blogDetails}>
                      <div className={style.blogUserNameDate}>
                        <span>{blog.author}</span>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Implement getStaticPaths to generate paths at build time
export const getStaticPaths = async () => {
  const data = await getBlogs();
  const paths = data.blogs.map((blog) => ({
    params: { blogSlug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Implement getStaticProps to fetch data for each blog post
export const getStaticProps = async ({ params }) => {
  const { blogSlug } = params;
  const blog = await getBlogBySlug(blogSlug);
  const data = await getBlogs();
  console.log(blog);
  return {
    props: { blog: blog.blog, blogs: data.blogs },
  };
};

export default Blog;
