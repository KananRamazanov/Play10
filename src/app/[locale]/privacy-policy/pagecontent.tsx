"use client"

import Image from "next/image"
import { motion } from 'framer-motion';

export default function PageContent() {
  return (
	<div className="relative">
		<div className="bg-[#F2EBFC] w-full min-h-[600px] h-auto 200px] relative flex items-end pb-[210px]">
			<div className="relative max-w-[500px]  mx-auto px-1 text-center ">
				<h1 className="font-extrabold text-5xl text-c-dark [&_span]:inline-block">
					<span className="-rotate-10 px-5">PRIVACY </span>
					<span className="-rotate-3">AND </span>
					<span className="-rotate-5 py-5 px-5">POLICY </span>
					<span className="rotate-10">LEGALITY </span>
				</h1>
			</div>
			<div className="absolute bottom-0 w-full h-[200px] z-10">
				<Image src="/images/cloudeshape.svg" fill alt="" className="object-cover"/>
			</div>
			<div>
			<motion.div
				className="absolute -right-5 top-[200px]"
				animate={{ y: [0, -20, 0] }} // naik -20px lalu turun lagi
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
			>
				<Image src="/images/green-star.svg" width={43} height={43} alt=""/>
			</motion.div>				
			<motion.div
				className="absolute left-[20%] bottom-[140px]"
				animate={{ y: [0, -20, 0] }} // naik -20px lalu turun lagi
				transition={{
					duration: 1,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
			>
				<Image src="/images/yellow-star.svg" width={43} height={43} alt=""/>
			</motion.div>				
			<motion.div
				className="absolute right-[20%] bottom-[130px]"
				animate={{ y: [0, -20, 0] }} // naik -20px lalu turun lagi
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
			>
				<Image src="/images/blue-star.svg" width={43} height={43} alt=""/>
			</motion.div>				


			</div>
		</div>
		<div className="max-w-[680px] mx-auto px-1 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-c-dark [&_h2]:mb-3 [&_h2]:mt-9 [&_p]:my-3 pb-[70px]">
			<h2>Play10 Policy: Nurturing a Safe and Inclusive Learning Environment</h2>
			<p>Policy is centered on creating a safe, inclusive, and inspiring learning environment for every child. We are committed to fostering a sense of belonging, where diversity is celebrated, and all students feel valued and respected.</p>
			<h2>Privacy & Policy and legality</h2>
			<p>Policy is centered on creating a safe, inclusive, and inspiring learning environment for every child. We are committed to fostering a sense of belonging, where diversity is celebrated, and all students feel valued and respected.</p>
			<h2>Personally Identifiable Information that You Provide to Us:</h2>
			<p>Policy is centered on creating a safe, inclusive, and inspiring learning environment for every child. We are committed to fostering a sense of belonging, where diversity is celebrated, and all students feel valued and respected.</p>
			<h2>Communication and Collaboration:</h2>
			<p>Policy is centered on creating a safe, inclusive, and inspiring learning environment for every child. We are committed to fostering a sense of belonging, where diversity is celebrated, and all students feel valued and respected.</p>
			<h2>Play10 Policy: Nurturing a Safe and Inclusive Learning Environment</h2>
			<p>Policy is centered on creating a safe, inclusive, and inspiring learning environment for every child. We are committed to fostering a sense of belonging, where diversity is celebrated, and all students feel valued and respected.</p>
		</div>
		<motion.div
			className="absolute bottom-0 right-[2%] hidden lg:block"
			animate={{ y: [0, -20, 0] }} // naik -20px lalu turun lagi
			transition={{
				duration: 2,
				repeat: Number.POSITIVE_INFINITY,
				repeatType: 'loop',
				ease: 'easeInOut',
			}}
		>
			<Image src="/images/starcap.svg" width={198} height={254} alt="star"/>
		</motion.div>
	</div>
  )
}
