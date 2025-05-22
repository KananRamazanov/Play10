"use client"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import { useState } from 'react';
import { useLocale } from "next-intl";
import SwitchLangCustom from "./SwitchLangCustom"
import { motion, AnimatePresence } from "framer-motion";
import { IoFilter } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

function ItemLink({href, label}:{href:string, label:string}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -54, opacity: 0 }}
			transition={{ duration: 0.3 }}
			whileHover={{ 
				rotateX: 15,
				rotateY: -15,
				scale: 1.05,				
			 }}
			whileTap={{
				scale: 0.95,
				rotateX: 0,
				rotateY: 0,
			}}			 
			style={{
				transformStyle: 'preserve-3d',
				perspective: 2000, // untuk membuat efek 3D terlihat nyata
			}}			 
			>
				<Link
				href={href}
				className="bg-white hover:bg-c-logo-yellow transition-all duration-300 relative text-c-dark py-3 px-8 font-extrabold text-[16px] rounded-3xl inline-block"
				>
				<span className="relative z-[1]">{label}</span>
				</Link>
		</motion.div>
	)
}

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="absolute top-0 left-0 w-full z-21 py-6 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-3 max-sm:px-3">
			<div className="wrapper flex justify-between items-center w-full">
				<div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex max-sm:flex w-[56px]"/>
				<div className="2xl:flex xl:flex lg:flex md:flex gap-9 items-center sm:hidden max-sm:hidden">
					<ItemLink href="/#play10" label="About app" />
					<ItemLink href="/#gettoknow" label="Features" />
					<ItemLink href="/#review" label="Reviews" />
				</div>
				<div className="relative 2xl:w-[148px] xl:w-[148px] lg:w-[148px] md:w-[148px] sm:w-[105px] max-sm:w-[102px]">
					<Link href="/"><Image src="/images/logo.svg" width={148} height={125} alt=""/></Link>
				</div>
				<div className="2xl:flex xl:flex lg:flex md:flex gap-9 items-center sm:hidden max-sm:hidden">
					<ItemLink href="/#downloadapp" label="Download App" />
					<ItemLink href="/#faq" label="FAQs" />		
					<SwitchLangCustom/>			
				</div>
				<div className="2xl:hidden xl:hidden lg:hidden md:hidden flex justify-center items-center sm:flex max-sm:flex w-[64px] h-[64px] ">
					<div 
						onClick={() => setIsMenuOpen(true)} onKeyDown={() => setIsMenuOpen(true)}
						className="flex justify-center items-center w-[52px] h-[52px] text-2xl cursor-pointer bg-c-logo-yellow text-gray-950 rounded-full">
						<IoFilter />
					</div>
				</div>
			</div>
			<AnimatePresence>
			{isMenuOpen && (
				<motion.div 
					initial={{ opacity: 0, x: 270 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 1, x: 270 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="fixed w-full h-full top-0 right-0 bg-[url('/images/bgmobile.svg')] bg-cover bg-left">
					<div className="flex justify-end px-5 mt-16">
						<div className="relative w-full max-w-[250px]">
							<div className="flex justify-between items-center w-full">
								<div className="relative text-4xl cursor-pointer" onClick={() => setIsMenuOpen(false)} onKeyDown={() => setIsMenuOpen(false)}><CgClose /></div>
								<SwitchLangCustom/>			
							</div>
							<div className="w-full text-center flex flex-col text-c-dark font-c-baloo text-[28px] font-semibold mt-16">
								<Link href="/#play10" onClick={() => setIsMenuOpen(false)} onKeyDown={() => setIsMenuOpen(false)}>About app</Link>
								<Link href="/#gettoknow" onClick={() => setIsMenuOpen(false)} onKeyDown={() => setIsMenuOpen(false)}>Features</Link>
								<Link href="/#review" onClick={() => setIsMenuOpen(false)} onKeyDown={() => setIsMenuOpen(false)}>Reviews</Link>
								<Link href="/#downloadapp" onClick={() => setIsMenuOpen(false)} onKeyDown={() => setIsMenuOpen(false)}>Download App</Link>
								<Link href="/#faq" onClick={() => setIsMenuOpen(false)} onKeyDown={() => setIsMenuOpen(false)}>FAQs</Link>
							</div>
						</div>
						<div className="absolute right-0 bottom-0"><Image src="/images/imgbg-sm.svg" width={249} height={381} alt=""/></div>
					</div>
				</motion.div>
			)}
			</AnimatePresence>
		</div>
	)
}
