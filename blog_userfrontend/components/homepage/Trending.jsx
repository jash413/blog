"use client";

import Link from "next/link";
import style from "../../styles/trending.module.css";
import Image from "next/image";

const Trending = ({ blogs, categories }) => {
  return (
    <div className={style.trendingDiv}>
      {categories?.map((category) => (
        <div className={style.trandingSlice}>
          <div className={style.trandingSliceHeader}>
            <h3>{category.name}</h3>
            <Link href={`/categories/${category.slug}`}>View All</Link>
          </div>
          <div className={style.trandingSliceList}>
            {blogs
              .filter((blogs) => {
                return blogs.categories_names.includes(category.name);
              })
              .slice(0, 3)
              .map((blog, index) => (
                <Link
                  href={`/${blog?.slug}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div className={style.trandingSliceListItem} key={index}>
                    <div className={style.trandingSliceListItemImg}>
                      <Image
                        src={blog.image_blog.public_id}
                        alt="blog image"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className={style.trandingSliceListItemContent}>
                      {blog.categories_names.map((category, index) => (
                        <p className={style.trandingItemCategory} key={index}>
                          {category}
                        </p>
                      ))}
                      <h4 className={style.trandingItemTitle}>{blog.title}</h4>
                      <p className={style.trandingItemDate}>12 Aug 2020</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
