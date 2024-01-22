import style from "../../styles/singalbloghome.module.css";
import Link from "next/link";
import Image from "next/image";

const SingleBlogHome = ({blogs}) => {

  const blog = blogs[0];
  return (
    <div className={style.blogDiv}>
      <div className={style.blogContent}>
        <span>{blog.categories_names[0]}</span>
        <h3>
          {blog.title}
        </h3>
        <p>
          {blog.meta_description}
        </p>
        <Link
          href={`/${blog.slug}`}
          style={{
            textDecoration: "none",
          }}
        >
        <button>Read Full Blog</button>
        </Link>
      </div>
      <div className={style.blogImage}>
        <Image
          src={blog.image_blog.public_id}
          alt="img"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SingleBlogHome;
