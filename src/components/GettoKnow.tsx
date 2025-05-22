"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; 
import Image from 'next/image'

function ItemSlider({images}:{images:string}){
    return(
        <div className="relative lg:w-[398px] w-[300px] lg:h-[498px] h-[341px] border-2 border-[#FFD800] bg-[#FFD800] p-1 border-solid overflow-hidden rounded-[25px]">
            <Image src={`${images}`} className="object-cover" fill alt=""/>
        </div>
    )
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function NextArrow(props: any) {
	const { onClick } = props;

	return (
		<div
			onClick={onClick}
			onKeyDown={onClick}
			className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-[90px] bg-[#EEEEEE] w-[46px] h-[46px] rounded-full cursor-pointer flex items-center justify-center"
		>
			<SlArrowRight />
		</div>
	);
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function PrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			onClick={onClick}
			onKeyDown={onClick}
			className="absolute top-[calc(50%+15px)] mt-3 transform -translate-y-1/2 left-0 -ml-[90px] bg-[#EEEEEE] w-[46px] h-[46px] rounded-full cursor-pointer flex items-center justify-center"
		>
			<SlArrowLeft />
		</div>
	);
}

export default function GettoKnow() {
    const [currentSlide, setCurrentSlide] = useState(0)	

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		pauseOnFocus: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
        afterChange: (index: number) => setCurrentSlide(index),
	}; 

    const slideTexts = [
        "Macəra adası",
        "Ulduz düşərgəsi",
        "Əyləncə dünyası",
        "Kəşf adası",
        "Təhlükəsiz sərgüzəşt"
    ];    

	const totalSlides = 5
	const percentage = ((currentSlide + 1) / totalSlides) * 100

    return (
        <div className="relative w-full">
            <div className="2xl:w-[124px] xl:w-[100px] lg:w-[100px] sm:w-[86px] max-sm:w-[76px] absolute top-16 left-0 z-3 [&>img]:max-w-full">
                <Image src="/images/bg-clouds-left.png" alt="clouds left" width={124} height={199}/>
            </div>
            <div className="2xl:w-[45px]  xl:w-[45px] lg:w-[45px] sm:w-[45px] max-sm:w-[45px] absolute top-30 left-[24%] z-3 [&>img]:max-w-full">
                <Image src="/images/yellow-star.svg" alt="clouds right" width={45} height={45}/>
            </div>
            <div className="2xl:w-[45px] xl:w-[45px]  lg:w-[45px] sm:w-[45px] max-sm:w-[45px] absolute bottom-32 -left-[18px] z-3 [&>img]:max-w-full">
                <Image src="/images/green-star.svg" alt="clouds right" width={45} height={45}/>
            </div>
            <div className="2xl:w-[45px] xl:w-[45px] lg:w-[45px] sm:w-[45px] max-sm:w-[45px] absolute top-30 right-4.5 z-3 [&>img]:max-w-full">
                <Image src="/images/blue-star.svg" alt="clouds right" width={45} height={45}/>
            </div>
            <div className="relative wrapper">
                <div className="w-full responsive flex justify-between items-center gap-16 lg:py-18 pt-18 pb-36">
                    <div className="flex-1 max-w-[430px] mt-[100px] lg:mt-0 order-2 lg:order-1 lg:px-0 px-8">
                        <div className="">
                            <h2 className="text-5xl text-c-dark font-bold font-c-baloo mb-4">Get to know all the Entertaiment</h2>
                            <h3 className="text-c-logo-blue text-[22px] font-c-baloo font-semibold">Rope Adventure</h3>
                        </div>
                        <div className="w-full">
                            <p>Children's entertainment applications are mobile or computer programs designed for children to learn while having fun, develop their creativity, and spend enjoyable time. These applications offer various features and games tailored to the age group of children.</p>
                        </div>                            
                    </div>
                    <div className="lg:w-[622px] w-auto order-1 lg-order-2">

                        <div className="relative flex items-center flex-col slidetoknow bg-[url('/images/bgslide-entertain.svg')] bg-cover lg:w-[496px] w-[300px] lg:h-[564px] h-[341px]">
                            <Slider
								{...settings}
								className="lg:mt-[60px] mt-[45px] lg:ml-[45px] rotate-5 lg:w-[398px] w-[300px] relative"
							>
                                <ItemSlider images="/images/toknow1.jpg"/>
                                <ItemSlider images="/images/toknow3.jpg"/>
                                <ItemSlider images="/images/toknow4.jpg"/>
                                <ItemSlider images="/images/toknow6.jpg"/>
                                <ItemSlider images="/images/toknow8.jpg"/>
                            </Slider>
                            <div className="absolute lg:left-0 mx-auto  lg:-ml-[70px] lg:bottom-[70px] -bottom-[90px] text-center font-bold font-c-baloo text-[22px] bg-[url('/images/ellipse.svg')] bg-cover min-w-[263px] min-h-[121px] flex justify-center items-center">
                                {slideTexts[currentSlide]}
                            </div>
                        </div>
                        <div className="relative w-full max-w-[380px] mr-[190px] mx-auto bg-black h-[1px] lg:flex hidden justify-between mt-[50px]">
                            <div className="absolute top-0 -mt-[2px] left-0 h-1 bg-c-logo-blue rounded-3xl transition-all duration-300" style={{ width: `${percentage}%` }} />
                            <div className="pt-2 z-20 w-full flex justify-between -mt-[35px] text-[12px]">
                                <span className="text-c-logo-blue font-bold">
                                    {String(currentSlide + 1).padStart(2,"0")}
                                </span>
                                <span className="text-c-logo-blue/20 font-bold">
                                    {String(currentSlide + 1).padStart(2,"0")}
                                </span>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    )
}