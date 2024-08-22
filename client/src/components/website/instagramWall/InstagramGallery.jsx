import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const bgSvg = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1036&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="rgba(1, 66, 98, 1)"></rect>
        <path d="M73.051,573.119C111.983,572.274,138.495,538.173,157.467,504.166C175.812,471.283,188.473,432.267,169.91,399.507C151.149,366.398,111.106,355.268,73.051,355.188C34.827,355.108,-4.953,366.26,-24.514,399.099C-44.456,432.577,-37.014,473.984,-17.958,507.973C1.597,542.851,33.074,573.987,73.051,573.119" fill="rgba(28, 83, 142, 0.4)" className="triangle-float3"></path>
        <path d="M1340.070917962713 274.4267682150354L1435.1291993114617 250.72607677264676 1352.0490214735044 119.98900047071837z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float3"></path>
        <path d="M1228.1703221874773 194.59049781225946L1120.7656057025633 249.31593425705694 1175.4910421473608 356.72065074197087 1282.8957586322747 301.9952142971734z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1"></path>
        <path d="M78.139,473.475C101.636,473.379,126.106,467.671,138.706,447.838C152.131,426.707,152.206,398.996,138.944,377.763C126.36,357.616,101.87,349.833,78.139,350.868C56.298,351.82,37.529,364.198,25.872,382.693C13.246,402.726,4.89,427.816,16.705,448.338C28.537,468.889,54.425,473.572,78.139,473.475" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1"></path>
        <path d="M321.772134633527 248.53071642757658L231.60167697591532 212.09948673834293 195.17044728668168 302.2699443959546 285.34090494429336 338.70117408518826z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float2"></path>
        <path d="M599.4158337109513 577.6505086783211L730.0556593804664 641.3678090219065 793.7729597240518 510.7279833523915 663.1331340545368 447.01068300880604z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1"></path>
        <path d="M854.6647813278134 242.12721147490703L664.2475448450186 255.26013482022745 755.1205866629122 395.1923480708591z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float2"></path>
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



import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/20/solid'
const instagramId = import.meta.env.VITE_INSTAGRAM_ID;
const instagramToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

const InstagramGallery = () => {
    const [instagramPosts, setInstagramPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function getInstagramPosts() {
            try {
                const response = await fetch(`https://graph.instagram.com/${instagramId}/media?fields=id,media_url,timestamp,media_type,username&access_token=${instagramToken}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                const images = data.data.filter(post => post.media_type === 'IMAGE');

                // Sort by timestamp in ascending order
                images.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

                // Get the last 10 images
                const last10Images = images.slice(-9).reverse();

                setInstagramPosts(last10Images);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        }

        getInstagramPosts();
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    if (loading) {
        return <p className="text-center text-white">Loading...</p>;
    }

    return (
        <div className='w-full py-2' style={{
            backgroundImage: `url(${bgSvg})`,
            backgroundSize: 'cover',
            width: '100%',
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
                    {instagramPosts.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <img className="w-sm cursor-pointer" src={slide.media_url} alt="slide_image" onClick={() => handleImageClick(slide.media_url)} />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ArrowLeftCircleIcon className='text-white' />
                        </div>
                        <div className="swiper-button-next slider-arrow ">
                            <ArrowRightCircleIcon className='text-white' />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleModalClick}>
                    <div className="bg-white rounded-lg shadow-lg relative">
                        <button className="absolute top-0 right-0 m-4 text-red-500 text-2xl" onClick={closeModal}>
                            &times;
                        </button>
                        <a href='https://www.instagram.com/mioc_oman?igsh=dzQ5bGZ0M2h3M2Z2' className='absolute -bottom-11 rounded-xl right-[50%] translate-x-[50%] px-2 py-1 bg-blue-300 font-semibold'>Go to instagram</a>
                        <img src={selectedImage} alt="Full Size" className="max-h-[80vh] max-w-full" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default InstagramGallery;
