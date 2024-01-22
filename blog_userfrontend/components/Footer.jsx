import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerDiv}>
      <div className={style.mainFooter}>
        <div className={style.footerInformations}>
          <div className={style.footerCompanyLogo}>
            <img src="/trakkyPurple.png" alt="" />
          </div>
          <div className={style.footerDescription}>
            <p>
              Discover beauty & wellness industry with trakky on the our blogs
              platform.
            </p>
          </div>
          <div className={style.footerSocialLinks}>
            <img src="/whatsapp.png" alt="" />
            <img src="/whatsapp.png" alt="" />
            <img src="/whatsapp.png" alt="" />
            <img src="/whatsapp.png" alt="" />
          </div>
        </div>
        <div className={style.footerLinks}>
          <div className={style.footerCol}>
            <h3>Resources</h3>
            <div className={style.footerColItem}>
              <span>Help Center </span>
              <span> Guide Book </span>
              <span> App Directory </span>
              <span> Contact us</span>
            </div>
          </div>
          <div className={style.footerCol}>
            <h3>Resources</h3>
            <div className={style.footerColItem}>
              <span>Help Center </span>
              <span> Guide Book </span>
              <span> App Directory </span>
              <span> Contact us</span>
            </div>
          </div>
          <div className={style.footerCol}>
            <h3>Resources</h3>
            <div className={style.footerColItem}>
              <span>Help Center </span>
              <span> Guide Book </span>
              <span> App Directory </span>
              <span> Contact us</span>
            </div>
          </div>
          <div className={style.footerCol}>
            <h3>Resources</h3>
            <div className={style.footerColItem}>
              <span>Help Center </span>
              <span> Guide Book </span>
              <span> App Directory </span>
              <span> Contact us</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footercopywriteText}>© Copyright 2023 Trakky. All Rights Reserved by Trakky Techno Services Pvt Ltd. &nbsp;&nbsp; | &nbsp;&nbsp; Handcrafted in India by Trakky</div>
    </div>
  );
};

export default Footer;
