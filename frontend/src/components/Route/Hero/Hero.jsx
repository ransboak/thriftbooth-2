import React from 'react'
import styles from '../../../styles/styles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat hero ${styles.normalFlex}`}>
        {/* <div className={`${styles.section} w-[90%] 800px:w-[60%] banner-content`}> */}
        <div className="banner-content">
            {/* <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>Trending Item</h1>
            <p className="pt-5 text-[16px] font-Poppins font-[400] text-[#000000ba]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit dicta quae nam voluptas temporibus ab repudiandae excepturi, eius in natus iusto optio esse. Consectetur recusandae culpa ad molestiae magni.
            </p> */}
            <p class="banner-subtitle">Trending item</p>

<p class="banner-text">starting at ₵ <b>1200</b>.00</p>

<Link to="/products" class="banner-btn">Shop now</Link>
        </div>
    </div>
  )
}

export default Hero