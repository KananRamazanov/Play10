"use client";
import { motion } from "framer-motion";
import Image from "next/image"
import React from 'react'
import { useLocale } from "next-intl";
import Link from "next/link";
import SocmedLink from "./SocmedLink";
import { useSelectedLayoutSegment, useRouter } from "next/navigation";

export default function Footer() {
	const locale = useLocale();
	const pathName = useSelectedLayoutSegment();
	return (
		<div className={`relative ${pathName ? "bg-[#F2EBFC]" : "bg-white"} w-[100%] 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-24 sm:pt-10 max-sm:pt-9 pb-8 flex flex-wrap justify-center text-3xl`}>
			{
				pathName ? 
					<div className="absolute top-0 w-full h-[150px]">
						<Image src="/images/shapewhite.svg" fill alt="" className="object-cover"/>
					</div>
					:
					<div className="absolute before:w-full before:content-[''] before:block before:h-[56px] before:bg-[#FFD554] before:absolute before:left-0 before:-top-11.5 left-0 right-0 mx-auto text-center w-full max-w-full flex flex-wrap justify-center 2xl:-top-10.5 xl:-top-10 lg:-top-14.5 md:-top-7.24 sm:top-4.5 max-sm:top-4.5 z-4 [&>svg]:object-cover [&>svg>path]:fill-[#FFD554] [&>svg]:z-3 [&>svg]:max-w-full [&>svg]:h-full">
						<svg width="2173" height="200" viewBox="0 0 1441 132" fill="none" xmlns="http://www.w3.org/2000/svg">
							<title>Footer decorative wave</title>
							<path d="M1502.75 0C1394.89 62.6205 1263.23 85.6033 1140.43 60.7619C1094.82 51.5411 1050.27 36.1099 1003.77 33.2717C875.993 25.514 761.775 112.652 634.853 129.046C578.15 136.346 521.186 129.299 465.071 116.853C436.359 110.512 407.817 102.754 379.694 94.8284C373.555 93.1171 367.455 91.3638 361.338 89.6146C284.135 67.8427 205.66 46.2768 125.619 49.6953C82.6954 51.5874 38.8113 62.0992 0.75 81.5333V0H1502.75Z" fill="#FFD554"/>
						</svg>
					</div>

			}

			<div className=" wrapper relative z-3">
				<div className="w-full flex flex-wrap justify-between items-center 2xl:mt-8 xl:mt-8 lg:mt-4 md:mt-2 sm:mt-3 max-sm:mt-3 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-3 max-sm:px-3">
					<div className="relative xl:max-w-[148px] lg:max-w-[148px] md:max-w-full sm:w-ful! max-sm:w-full! xl:pt-0 lg:pt-0 md:pt-0 sm:pt-10 max-sm:pt-9 [&>img]:width-full flex xl:justify-normal lg:justify-normal md:justify-normal sm:justify-between max-sm:justify-between sm:items-center max-sm:items-center">
						<div className="xl:[&>a>img]:w-[148px] lg:[&>a>img]:w-[148px] md:[&>a>img]:w-[148px] sm:[&>a>img]:w-[100px]! max-sm:[&>a>img]:w-[100px]!">
							<Link href="/"><Image src="/images/logo.svg" width={148} height={125} alt=""/></Link>
						</div>
						<div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block max-sm:block">
							<div className="relative [&>div]:mt-0">
								<SocmedLink width={48}/> 
							</div>
						</div>
					</div>
					<div className="relative 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full max-sm:w-full flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-between max-sm:justify-between min-w-5/10 max-w-auto [&>ul>li]:pr-5 2xl:[&>ul>li]:pl-5 lg:[&>ul>li]:pl-5 md:[&>ul>li]:pl-5 xl:[&>ul>li]:pl-5 sm:[&>ul:first-child]:pl-0 max-sm:[&>ul:first-child]:pl-0 2xl:[&>ul>li]:py-4 xl:[&>ul>li]:py-4 lg:[&>ul>li]:py-4 md:[&>ul>li]:py-3 sm:[&>ul>li]:py-3 max-sm:[&>ul>li]:py-2.5 font-extrabold text-[16px] sm:items-start max-sm:items-start 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-2 max-sm:pb-2 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-6 max-sm:pt-6">
						<ul className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col">
							<li><Link href="/">{locale === "az" ? "About app" : "About app"}</Link></li>
							<li><Link href="/">{locale === "az" ? "Funksionallıq" : "Возможности"}</Link></li>
							<li><Link href="/">{locale === "az" ? "Rəylər" : "Отзывы"}</Link></li>
							<li><Link href="/">{locale === "az" ? "Proqramı yükləyin" : "Загрузить приложение"}</Link></li>
							<li><Link href="/">{locale === "az" ? "FAQ" : "FAQ"}</Link></li>
						</ul>
						<ul className="2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex max-sm:flex hidden">
							<li><Link href="/">{locale === "az" ? "Məxfilik siyasəti" : "Политика конфиденциальности"}</Link></li>
							<li><Link href="/">{locale === "az" ? "İstifadəçi razılaşması" : "Пользовательское соглашение"}</Link></li>
							<li><Link href="/">{locale === "az" ? "Hesabı silmək" : "Удалить профиль"}</Link></li>
						</ul>
						<div className="overflow-[unset] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex max-sm:flex justify-center 2xl:pb-5 xl:pb-5 lg:pb-5 md:pb-5 sm:pb-5 max-sm:pb-5 sm:[&>a]:absolute sm:[&>a]:bottom-[45px] sm:[&>a]:right-0 max-sm:[&>a]:absolute max-sm:[&>a]:bottom-[45px] max-sm:[&>a]:right-0">
							<Link href="#top"><Image src="/images/arrow-up.png" alt="arrow-up" width={48} height={48}/></Link>							
						</div>
					</div>
					<div className="w-auto flex-wrap justify-between items-center gap-5 2xl:flex xl:flex lg:flex md:flex sm:hidden max-sm:hidden">
						<div className="2xl:[&>a]:w-[76] xl:[&>a]:w-[76] md:[&>a]:w-[64] sm:[&>a]:w-[56] max-sm:[&>a]:w-[56]">
							<Link className="" href="#top"><Image src="/images/arrow-up.png" alt="arrow-up" width={76} height={76}/></Link>
						</div>
						<div className="relative [&>div]:mt-0">
							<SocmedLink width={64}/> 
						</div>
					</div>
				</div>	
				<div className="w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-3 max-sm:px-3 2xl:mt-6 xl:mt-6 lg:mt-6 md:mt-6 sm:mt-6 max-sm:mt-6">
					<div className="flex flex-wrap items-center 2xl:justify-end xl:justify-end lg:justify-end md:justify-between sm:justify-between max-sm:justify-between">
						<div className="flex flex-wrap items-center copyright w-auto 2xl:[&>p]:text-[20px] xl:[&>p]:text-[20px] md:[&>p]:text-[18px] sm:[&>p]:text-[14px] max-sm:[&>p]:text-[14px] [&>p]:my-0 [&>p]:text-[#807d8a] [&>p>span]:text-[#2E273F] [&>p>span]:font-extrabold">
							<p>{ locale === "az" ? "2024 @All Rights Reserved - " : "2024 @All Rights Reserved: - " }<span>Play10</span></p>
						</div>
						<div className="flex flex-wrap items-center w-auto">
							<div className="xl:[&>p]:text-[20px] md:[&>p]:text-[18px] sm:[&>p]:text-[14px] max-sm:[&>p]:text-[14px] text-[#2E273F] 2xl:ml-5 xl:ml-5 md:ml-4 sm:ml-0.5 max-sm:ml-0.5"><p>{locale === "az" ? "Hazırladı" : "Сайт от"}</p></div>
							<div className="w-auto 2xl:ml-5 xl:ml-5 lg:ml-5 md:ml-4 sm:ml-3 max-sm:ml-2 2xl:[&>a]:w-[58px] xl:[&>a]:w-[58px] lg:[&>a]:w-[58px] md:[&>a]:w-[52px] sm:[&>a]:w-[38px] max-sm:[&>a]:w-[38px] [&>a>img]:w-full">
								<Link href="/"><Image src="/images/by-one.png" alt="arrow-up" width={58} height={58}/></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
