"use client"

import { useState, useEffect } from "react"
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

function ItemLang({label, onClick, className}:{label:string, onClick?:() => void , className?:string}) {
	return (
		<div 
			onClick={onClick}
			onKeyDown={onClick}
			className={cn("bg-[#8D21AA] w-[54px] w-[54px] cursor-pointer transition-all duration-500  uppercase rounded-full right-0 h-[54px] flex justify-center items-center text-lg font-semibold text-white", className)}>
			{label}
		</div>
	)
}

export default function SwitchLangCustom() {
	const [show, setShow] = useState(false)
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const router: any = useRouter();
	const locale = useLocale();
	const pathname = usePathname();

	const changeLang = (lang: string) => {
		const segments = pathname.split("/");
		if (segments[1]?.length === 2) {
			segments[1] = lang;
		} else {
			segments.splice(1, 0, lang);
		}
		const newPath = segments.join("/");
		router.push(newPath);
	};

	useEffect(() => {
		if (router.isReady) {
			console.log("asPath:", router.asPath); // debug
		}
	}, [router.isReady, router.asPath]);

	return (
		<div className="relative z-10">
			<AnimatePresence>
				<ItemLang label={`${locale}`} onClick={()=>setShow(!show)} className={` font-extrabold z-10 ${!show ? "bg-c-logo-yellow -rotate-9 text-c-dark" : "bg-[#8D21AA]"} `}/>
				{
					show &&
						<motion.div 
							className="absolute mt-2 z-0"
							key="lang"
							initial={{
								y: -54,
								zIndex:-1
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							exit={{
								y: -54,
							}}
							transition={{ duration: 0.3 }}

						>
							{
								locale === "az" ? <ItemLang label="RU" onClick={()=>changeLang("ru")}/> : <ItemLang label="AZ" onClick={()=>changeLang("az")}/>
							}				
						</motion.div>
				}
			</AnimatePresence>
		</div>
	)
}
