import style from "../styles/navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={style.nav}>
      <div className={style.headerTitle}>
        <Link href="/">
        <img
          className={style.trakkyLogo}
          src="/logo text white.png"
          alt="logo"
        />
        </Link>
      </div>
      <div className={style.searchSection}>
        <div className={style.navHeroText}>Discover Grooming & Wellness</div>
        <div className={style.searchBarDiv}>
          <div className={style.searchBar}>
            <img src="/Frame 30.png" alt="search" />
            <input
              className={style.searchInput}
              type="text"
              placeholder="Search for a blog..."
            />
          </div>
          <div className={style.searchCity}>
              <img src="/location.png" alt="" />
              <div className={style.cityName}>Ahmedabad</div>
              <img src="/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
