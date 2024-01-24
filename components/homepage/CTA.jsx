import style from '../../styles/cta.module.css'

const CTA = () => {
  return (
    <div className={style.ctaDiv}>
        <div className={style.suscribeDiv}>
            <div className={style.subImg}>
                <img src={"/IconFrame.png"} alt="img" />
            </div>
            <div className={style.subText}>
                <h3>Do cool things with us.</h3>
                <p>Stay in the loop with updates from our team and community. Once a month.</p>
            </div>
            <div className={style.subInp}>
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe to newsletter</button>
            </div>
        </div>
    </div>
  )
}

export default CTA