import React from "react";
import styles from "../../styles/error.module.css"; // Make sure to import your CSS module
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>:) Page Not Found</h1>
          <p>
            We can't seem to find the page you're looking for. Please check the
            URL for any typos.
          </p>
          <ul className={styles.menu}>
            <li>
              <Link className={styles.link} to="/">
                Go to Homepage
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Visit our Blog
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                Contact support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Error;
