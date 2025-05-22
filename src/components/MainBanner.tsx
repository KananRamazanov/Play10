"use client";

import React from 'react'
import { useLocale } from "next-intl";
import SocmedLink from "./SocmedLink";

export default function MainBanner() {
	const locale = useLocale();

	return (
		<div className="relative w-full flex items-end pb-[55px] 2xl:rounded-b-[200px] xl:rounded-b-[200px] lg:rounded-b-[180px] md:rounded-b-[180px] sm:rounded-b-[36px] max-sm:rounded-b-[36px] overflow-hidden justify-center bg-cover bg-center bg-no-repeat h-screen bg-[url('/images/mainimage.jpg')]" >
			<div className="relative text-white max-w-[700px] mx-auto text-center 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-3 max-sm:px-3">
				<h1 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl max-sm:text-[2rem] font-black uppercase 2xl:leading-14 xl:leading-14 lg:leading-14 md:leading-14 sm:leading-9 max-sm:leading-9 mb-1">
					{locale==="az"? "Play10 - one app, endless fun!Əəğpkрытыоло":"Play10 - one app, endless fun!"}
				</h1>
				<h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[15px] max-sm:text-[15px] max-w-[610px] mx-auto">
					{
						locale === "az"?"This mobile application provides all the information about amusement parks for children, teenagers and adults in one place. By selecting the park you want, you will be able to take advantage of discounted offers and services."
							: "This mobile application provides all the information about amusement parks for children, teenagers and adults in one place. By selecting the park you want, you will be able to take advantage of discounted offers and services."
					}
				</h4>
				<SocmedLink width={58}/>
			</div>
		</div>
	)
}
