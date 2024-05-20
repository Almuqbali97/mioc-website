import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const bgSvg = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1036&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="rgba(1, 66, 98, 1)"></rect>
        <path d="M73.051,573.119C111.983,572.274,138.495,538.173,157.467,504.166C175.812,471.283,188.473,432.267,169.91,399.507C151.149,366.398,111.106,355.268,73.051,355.188C34.827,355.108,-4.953,366.26,-24.514,399.099C-44.456,432.577,-37.014,473.984,-17.958,507.973C1.597,542.851,33.074,573.987,73.051,573.119" fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
        <path d="M1340.070917962713 274.4267682150354L1435.1291993114617 250.72607677264676 1352.0490214735044 119.98900047071837z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
        <path d="M1228.1703221874773 194.59049781225946L1120.7656057025633 249.31593425705694 1175.4910421473608 356.72065074197087 1282.8957586322747 301.9952142971734z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
        <path d="M78.139,473.475C101.636,473.379,126.106,467.671,138.706,447.838C152.131,426.707,152.206,398.996,138.944,377.763C126.36,357.616,101.87,349.833,78.139,350.868C56.298,351.82,37.529,364.198,25.872,382.693C13.246,402.726,4.89,427.816,16.705,448.338C28.537,468.889,54.425,473.572,78.139,473.475" fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
        <path d="M321.772134633527 248.53071642757658L231.60167697591532 212.09948673834293 195.17044728668168 302.2699443959546 285.34090494429336 338.70117408518826z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
        <path d="M599.4158337109513 577.6505086783211L730.0556593804664 641.3678090219065 793.7729597240518 510.7279833523915 663.1331340545368 447.01068300880604z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
        <path d="M854.6647813278134 242.12721147490703L664.2475448450186 255.26013482022745 755.1205866629122 395.1923480708591z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1036">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <style>
            @keyframes float1 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-10px, 0)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float1 {
                    animation: float1 5s infinite;
                }

                @keyframes float2 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-5px, -5px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float2 {
                    animation: float2 4s infinite;
                }

                @keyframes float3 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(0, -10px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float3 {
                    animation: float3 6s infinite;
                }
        </style>
    </defs>
</svg>`
)}`;

const slides = [
    'https://meaco-oman.org/wp-content/uploads/2023/10/393416043_910460634035599_4046318621734586269_n.jpg',
    'https://i.ibb.co/ncrXc2V/1.png',
    'https://i.ibb.co/B3s7v4h/2.png',
    'https://i.ibb.co/XXR8kzF/3.png',
    'https://i.ibb.co/yg7BSdM/4.png',
    'https://img.freepik.com/free-photo/genderneutral-hand-modifying-settings-3d-printer-finish-printing-round-white-object-from-recycled-plastic-futuristic-concept-new-working-possibilities-small-businesses-by-3d-printing_633478-540.jpg?t=st=1716085488~exp=1716089088~hmac=7ca66f4f29205dde05d2ec59c4aca5fe1c9d5b6cc6d017ab2776a7f38b7d2910&w=360',
];


import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/20/solid'
const InstagramGallery = () => {
    return (

        <div className='w-full py-2' style={{
            backgroundImage: `url(${bgSvg})`,
            backgroundSize: 'cover',
            width: '100%',
            // height: '100vh'
        }}>
            <div className="slider-container">
                <h1 className="text-center p-4 text-white text-2xl tracking-wide">Instagram Wall</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {slides.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <img className="w-sm" src={slide} alt="slide_image" />
                        </SwiperSlide>
                    })}


                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            {/* &lt; */}
                            <ArrowLeftCircleIcon className='text-white' />
                        </div>
                        <div className="swiper-button-next slider-arrow ">
                            <ArrowRightCircleIcon className='text-white' />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default InstagramGallery;
