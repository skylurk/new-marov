
import React from 'react';
import styles from '../../styles/Home.module.scss';

export default function SectionOne() {


    function handleClick() {
        const btns = document.querySelectorAll('.nav_btn');
        const slides = document.querySelectorAll('.video_slide');
        var sliderNav = function(manual){

            btns.forEach((btn) => {
                btn.classList.remove('active');
            })

            slides.forEach((slide) => {
                slide.classList.remove('active');
            })

            btns[manual].classList.add('active');
            slides[manual].classList.add('active');
        }
        btns.forEach((btn, i) => {
            btn.addEventListener('click', () =>{
                sliderNav(i);
            })
        })
    }


    return (
        <div className={styles.home_section_one}>
            <div className={styles.header}>
                <a href="#" className={styles.brand}>Marovino</a>
                
                <div className={styles.navigation}>
                    <div className={styles.navigation_items}>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Portfolio</a>
                    </div>
                </div>
            </div>


            <section className={styles.home}>
                <video className='video_slide active' src="https://res.cloudinary.com/dv02zacmn/video/upload/v1635508785/marovino/icons/IMG_9327_rfp6mh.mov" autoPlay muted loop>
                </video>
                <video className='video_slide' src="https://res.cloudinary.com/dv02zacmn/video/upload/v1638826915/marovino/blogs/0001-0250-tocjbkde_m3BMecbF_r0l4hm.mp4" autoPlay muted loop>
                </video>
                <video className='video_slide' src="https://res.cloudinary.com/dv02zacmn/video/upload/v1635508785/marovino/icons/IMG_9327_rfp6mh.mov" autoPlay muted loop>
                </video>
                <video className='video_slide' src="https://res.cloudinary.com/dv02zacmn/video/upload/v1635508785/marovino/icons/IMG_9327_rfp6mh.mov" autoPlay muted loop>
                </video>
                <div className={styles.content}>
                    <h1>Brands that Sell</h1>
                    <p>Some more text comes here </p>
                </div>

                <div className={styles.slider_navigation}>
                    <div onClick={handleClick} className={`${styles.nav_btn} nav_btn`}></div>
                    <div onClick={handleClick} className={`${styles.nav_btn} nav_btn`}></div>
                    <div onClick={handleClick} className={`${styles.nav_btn} nav_btn`}></div>
                    <div onClick={handleClick} className={`${styles.nav_btn} nav_btn`}></div>
                </div>
            </section>
        </div>
    )
}
