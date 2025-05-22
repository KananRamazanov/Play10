"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useRef, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Play10Info() {
	const targetRef = useRef(null)
	const [currentSlide, setCurrentSlide] = useState(0)	
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"], // start scrolling when section appears
	})
	
	// Parallax + Rotate for shapeimg1
	const y1 = useTransform(scrollYProgress, [0, 1], [-20, -250])
	const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 25])

	// Parallax + Rotate for shapeimg2
	const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
	const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 20])
	
	// Parallax + Rotate for shapeimg3
	const y3 = useTransform(scrollYProgress, [0, 1], [0, -200])
	const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 30])
	
	const totalSlides = 3
	const percentage = ((currentSlide + 1) / totalSlides) * 100

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		afterChange: (index: number) => setCurrentSlide(index),
	};

	function SliderPhone() {
		return (
				<div 
					className="lg:absolute 2xl:-top-6 xl:-top-6 lg:-top-19 md:-top-19 right-0 z-10"
				>
					<div className="relative lg:w-auto w-[285px] mx-auto">
						<div className="bg-[url('/images/frame-phone.png')] top-0 bg-contain bg-no-repeat overflow-hidden z-10 relative w-[285px] h-[583px]"/>
						<div className="slidephobe absolute  h-[558px] w-[277] top-2 m-1 px-[11px] overflow-hidden bg-[#FDEBC3] rounded-[30px]">
							<Slider
								{...settings}
								className="rounded-b-[40px] rounded-t-[30px] overflow-hidden relative z-10"
							>
								<div className="relative text-center">
									<Image src="/images/phoneslide1.png" className="mx-auto" width={266} height={582} alt="slide"/>
								</div>
								<div className="relative text-center">
									<Image src="/images/phoneslide2.png" className="mx-auto" width={266} height={582} alt="slide"/>
								</div>
								<div className="relative text-center">
									<Image src="/images/phoneslide3.png" className="mx-auto" width={266} height={582} alt="slide"/>
								</div>
							</Slider>
							<Image src="/images/frame-phone-t.png" width={113} height={23} alt="" className="mx-auto absolute top-0 left-0 right-0 z-10"/>

						</div>				
					</div>
				</div>

		)
	}

	return (
		<div ref={targetRef} className="bg-[#FDEBC4] relative lg:px-8 px-4 lg:py-56 [&_p]:my-4 text-lg text-[#2E273F]
		before:content-[''] before:absolute z-20 before:top-0 before:left-0 before:bg-[url('/images/shapewhite-top.svg')] before:bg-cover before:w-full 2xl:before:h-[204px] xl:before:h-[186px] lg:before:h-[164px] md:before:h-[142px] before:bg-center
		after:content-[''] after:absolute  after:bottom-0 after:left-0 after:bg-[url('/images/shapewhite-btm.svg')] after:bg-cover after:w-full 2xl:after:-mb-4.5 xl:after:-mb-7.5 md:after:-mb-4.5 2xl:after:h-[336px] xl:after:h-[330px] lg:after:h-[276px] md:after:h-[236px] after:bg-center
		">
			<div className="relative z-10 w-[calc(100%+32px)] h-[76px] -mx-4 lg:hidden block">
				<Image src="/images/topbg-sm.svg" fill className="object-cover" alt="shape"/>				
			</div>
			<div className="wrapper pt-16 relative">
				<motion.div 
					style={{ y: y1, rotate: rotate1 }}
					className="absolute -left-24 top-20 -z-10 hidden lg:block"
				>
					<Image src="/images/shapeimg1.png" width={431} height={445} alt="shape"/>
				</motion.div>
				<div className="hidden lg:block "><SliderPhone/></div>
				<div className="lg:hidden -mt-[120px]">
					<Image src="/images/shapeimg1.png" width={431} height={445} alt="shape"/>
				</div>
			</div>
			<div className="relative max-w-[445px] lg:pb-44 pb-14 mx-auto 2xl:[&>h2]:text-5xl xl:[&>h2]:text-5xl lg:[&>h2]:text-5xl md:[&>h2]:text-5xl sm:[&>h2]:text-4xl max-sm:[&>h2]:text-[2rem]">
				<h2 className="font-extrabold lg:text-[48px] text-[28px] text-c-base mb-5 lg:leading-12 leading-10 font-c-baloo">With PLAY10 Application - simpler, more fun</h2>
				<p>Children's entertainment applications are mobile or computer programs designed for children to learn while having fun, develop their creativity, and spend enjoyable time. These applications offer various features and games tailored to the age group of children.</p>
				<p>This mobile application provides all the information about amusement parks for children, teenagers and adults in one place. By selecting the park you want, you will be able to take advantage of discounted offers and services.</p>
				<div className="blok lg:hidden "><SliderPhone/></div>
				<div className="relative w-full bg-black h-[1px] flex justify-between lg:mt-[110px] mt-[50px]">
					<div className="absolute top-0 -mt-[2px] left-0 h-1 bg-c-logo-blue rounded-3xl transition-all duration-300" style={{ width: `${percentage}%` }} />
					<div className="pt-2 z-20 w-full flex justify-between -mt-[40px] text-[12px]">
						<span className="text-c-logo-blue font-bold">
							{String(currentSlide + 1).padStart(2,"0")}
						</span>
						<span className="text-c-logo-blue/20 font-bold">
							{String(totalSlides).padStart(2,"0")}
						</span>
					</div>
				</div>

				<div className="flex gap-2 mt-16 lg:justify-start justify-center">
					<Link target="_blank" href="https://apps.apple.com/us/app/play10/id6738125748" className="flex gap-1 bg-white border rounded-3xl py-2 lg:px-7 px-5">
						<Image src="/images/apple.svg" width={18} height={22} alt=""/>
						<span>App Store</span>
					</Link>
					<Link target="_blank" href="https://play.google.com/store/apps/details?id=info.chaitech.blueplanet&pli=1" className="flex gap-1 bg-white border rounded-3xl py-2 lg:px-7 px-5">
						<Image src="/images/playstore_.svg" width={20} height={22} alt=""/>
						<span>Play Store</span>
					</Link>
				</div>
			</div>
			<div className="wrapper relative hidden lg:block">
				<motion.div 
					style={{ y: y2, rotate: rotate2 }}
					className="absolute -left-24 -bottom-48 -z-10"
				>
					<Image src="/images/shapeimg3.png" width={431} height={445} alt="shape"/>
				</motion.div>
				<motion.div 
					style={{ y: y3, rotate: rotate3 }}
					className="absolute -right-5 -bottom-72 -z-10">
					<Image src="/images/shapeimg4.png" width={431} height={445} alt="shape"/>
				</motion.div>
			</div>
			<div className="relative  h-[76px] -mx-4 lg:hidden block">
				<Image src="/images/shape-whitetrans.png" fill className="object-cover" alt="shape"/>				
			</div>

		</div>
	)
}
