"use client"
import Image from "next/image"
import React from 'react'
import { useLocale } from "next-intl";
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function ItemFaq ({title,desc}:{title:string,desc:string}){

    return(
        <AccordionItem className="border-none mb-2 bg-white rounded-xl" value="item-1">
        <AccordionTrigger className="px-7 py-6 text-[16px] text-gray-950 no-underline hover:no-underline cursor-pointer data-[state=closed]:animate-accordion-up data-[state=closed]:bg-size[16px] data-[state=closed]:relative data-[state=closed]:bg-[length:30px] data-[state=closed]:bg-[url('/images/plus-svgrepo-com.svg')] data-[state=closed]:bg-right data-[state=closed]:[background-position-x:98%] data-[state=closed]:bg-no-repeat data-[state=open]:bg-size[16px] data-[state=open]:relative data-[state=open]:bg-[length:36px] data-[state=open]:bg-[url('/images/minus-svgrepo-com.svg')] data-[state=open]:bg-right data-[state=open]:[background-position-x:98%] data-[state=open]:bg-white data-[state=open]:bg-no-repeat w-full">
            {title}
        </AccordionTrigger>
        <AccordionContent className="relative pt-8 pb-8 px-5 border-t-0 border-[#f2ebfc] overflow-hidden text-[16px] text-[#807d8a] [&>p]:my-1 [&::before]:absolute [&::after]:absolute [&::before]:-left-[1.5px] [&::after]:-left-[1.5px] [&::after]:z-3 [&::before]:-top-[6px] [&::after]:top-[8px] [&::before]:content-[''] [&::after]:content-[''] [&::before]:w-[100%] [&::after]:w-[100%] [&::before]:block [&::before]:rounded-tl-[0px] [&::before]:rounded-tr-[0px] [&::before]:h-[20px] [&::after]:h-[18px] [&::before]:bg-[#f2ebfc] [&::after]:rounded-tl-[13px] [&::after]:rounded-tr-[13px] [&::after]:bg-[#ffffff]">
            {desc}
        </AccordionContent>
        </AccordionItem>
    )
}


function FaqHome() {
    const locale = useLocale();
    return (
        <div className="relative before:content-[''] before:absolute before:w-full 2xl:before:h-[124px] xl:before:h-[86px] lg:before:h-[86px] md:before:h-[86px] sm:before:h-[16px] 2xl:before:hidden xl:before:hidden lg:before:hidden] md:before:flex sm:before:flex max-sm:before:flex before:bg-white before:mx-auto before:left-0 before:right-0 before:-top-[70px] w-full bg-[#f2ebfc] pt-20 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-3 max-sm:px-3 overflow-y-[unset]">
            <div className="absolute  2xl:-top-[15%] xl:-top-[15%] lg:-top-[14%] md:-top-[4.24%] sm:-top-[5.86%] max-sm:-top-[5.86%] xl:left-0 lg:left-0 md:left-0 sm:-left-[1px] max-sm:-left-[1px] w-full lg:flex hidden [&>svg]:z-3 [&>svg]:w-full [&>svg>path]:fill-[#F2EBFC]">
                <svg viewBox="0 0 1441 133" fill="none">
                    <title>Decorative background wave</title>
                    <path d="M1480.5 133C1374.22 70.1898 1244.49 47.1372 1123.48 72.054C1078.54 81.3029 1034.64 96.7809 988.823 99.6277C862.923 107.409 750.378 20.0061 625.315 3.56224C569.442 -3.75927 513.312 3.30919 458.02 15.7929C429.728 22.1528 401.604 29.9342 373.893 37.8841C367.844 39.6006 361.833 41.3592 355.806 43.1137C279.734 64.9517 202.409 86.583 123.54 83.1543C81.245 81.2564 38.0038 70.7127 0.5 51.2196V133H1480.5Z" fill="#F2EBFC"/>
                </svg>
            </div>
            <div className=" w-full h-[79px] -top-[79px] left-0 absolute lg:hidden block">
                <Image src="/images/topsm-xm.svg" className="object-cover" alt="image" fill/>
            </div>
            <div className="2xl:w-[45px] hidden lg:block xl:w-[45px] lg:w-[45px] sm:w-[45px] max-sm:w-[45px] absolute top-124 left-[12%] z-3 [&>img]:max-w-full">
                <Image src="/images/yellow-star.svg" alt="clouds right" width={45} height={45}/>
            </div>
            <div className="2xl:w-[45px] xl:w-[45px] lg:w-[45px] sm:w-[45px] max-sm:w-[45px] absolute top-56 left-[5.6%] z-3 [&>img]:max-w-full">
                <Image src="/images/blue-star.svg" alt="clouds right" width={45} height={45}/>
            </div>
            <motion.div 
                className="2xl:w-[244px] xl:w-[244px] lg:w-[224px] sm:w-[130px] max-sm:w-[128px] absolute 2xl:-bottom-32 xl:-bottom-32 lg:-bottom-32 md:-bottom-32 sm:-bottom-29 max-sm:-bottom-29 2xl:-left-[64px] xl:-left-[64px] lg:-left-[64px] md:-left-[64px] sm:left-[16px] max-sm:left-[16px] z-3 [&>img]:max-w-full"
				animate={{ y: [0, -20, 0] }} // naik -20px lalu turun lagi
				transition={{
					duration: 1.8,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
            >
                <Image src="/images/kids-left.svg" alt="kids right" width={224} height={393}/>
            </motion.div> 
            <div className="2xl:w-[45px] hidden lg:block xl:w-[45px] lg:w-[45px] sm:w-[45px] max-sm:w-[45px] absolute bottom-86 right-[20%] z-3 [&>img]:max-w-full">
                <Image src="/images/green-star.svg" alt="clouds right" width={45} height={45}/>
            </div>    
            <div className="2xl:w-[45px] xl:w-[45px] lg:w-[45px] sm:w-[45px] max-sm:w-[45px] absolute top-30 -right-[15px] z-3 [&>img]:max-w-full">
                <Image src="/images/yellow-star.svg" alt="clouds right" width={45} height={45}/>
            </div>  
            <motion.div 
                className="2xl:flex xl:flex lg:flex md:flex sm:hidden max-sm:hidden 2xl:w-[244px] xl:w-[244px] lg:w-[224px] md:w-[130px] sm:w-[130px] max-sm:w-[128px] absolute bottom-48.5 2xl:right-[64px] xl:right-[64px] lg:right-[24px] md:right-[6px] sm:right-[6px] z-3 [&>img]:max-w-full"
				animate={{ y: [0, -20, 0] }} // naik -20px lalu turun lagi
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}

            >
                <Image src="/images/kids-right.svg" alt="kids right" width={224} height={393}/>
            </motion.div>  
            <div className="2xl:w-[244px] xl:w-[244px] lg:w-[224px] sm:w-[196px] max-sm:w-[196px] absolute bottom-0 -right-[5px] z-3 [&>img]:max-w-full">
                <Image src="/images/clouds-bottom-right.svg" alt="clouds bottom right" width={224} height={393}/>
            </div>                                            
            <div className="wrapper relative">
                <div className="w-full 2xl:[&>h2]:text-5xl xl:[&>h2]:text-5xl lg:[&>h2]:text-5xl md:[&>h2]:text-5xl sm:[&>h2]:text-[2rem] max-sm:[&>h2]:text-[2rem] text-center [&>h2]:text-c-dark [&>h2]py-4 [&>h2]:font-extrabold">
                    <h2>{locale === "az" ? "Ən çox" : "Часто"}</h2>
                </div>
                <div className="w-full flex flex-wrap justify-center relative">
                    <div className="2xl:w-10/10 xl:w-10/10 lg:w-10/10 md:w-10/10 sm:w-10/10 max-sm:w-10/10 text-center flex flex-wrap justify-between text-[20px] text-[#807d8a] [&>p]:my-5 2xl:[&>h2]:text-5xl xl:[&>h2]:text-5xl lg:[&>h2]:text-5xl md:[&>h2]:text-5xl sm:[&>h2]:text-[2rem] max-sm:[&>h2]:text-[2rem] [&>h2]:text-c-dark [&>h2]py-4 [&>h2]:font-extrabold">
                        <h2 className="w-full flex flex-wrap justify-center relative gab-2 pb-24 pt-5"><p className="relative rotate-[15deg]">{locale === "az" ? "verilən" : "задаваемые"}</p><span className="rotate-[-16deg]">{locale === "az" ? "suallar" : "вопросы"}</span></h2>
                    </div>
                </div>
                <div className="w-full [&>h3]:text-[24px] [&>h3]:text-c-dark text-center font-bold"><h3>{locale === "az" ? "Bizə verilən suallar" : "Вопросы, которые нам задают"}</h3></div>
                <div className="flex flex-wrap justify-center py-18">   
                    <div className="xl:w-6/10 lg:w-6/10 md:w-6/10 sm:w-10/10 max-sm:w-10/10 mb-5 [&>div]:rounded-xl [&>button]:px-5">
                            <Accordion type="single" collapsible className="w-full">
                                <ItemFaq title={locale === "az" ? "Parkların iş saatlarını necə öyrənə bilərəm?" : "Как узнать часы работы парков?"}  desc={locale === "az" ? "Hər bir parkın açılış saatları Instagram səhifələrində göstərilir. Ən aktual məlumat üçün sizi maraqlandıran parkların səhifələrinə abunə olmağı tövsiyə edirik" : "Время работы каждого парка отображается на их страницах в Instagram. Для получения самой актуальной информации рекомендуем вам подписаться на страницы интересующих вас парков"}/>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <ItemFaq title={locale === "az" ? "Parkda uşaqlar və böyüklər üçün kafe və restoranlar varmı?" : "Есть ли в парке кафе и рестораны для детей и взрослых?"} desc={locale === "az" ? "Bəli, əksər parkların ərazisində nahar üçün kafe və restoranlar var" : "Да, на территории большинства парков есть кафе и рестораны, где можно пообедать."}/>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <ItemFaq title={locale === "az" ? "Məktəblilər , tələbələr və ya qrup ziyarıtləri üçün biletlərdə endirimlər varmı?" : "Есть ли скидки на билеты для школьников,студентов или групповые посещения?"} desc={locale === "az" ? "Qrup şəkildə ziyarət etmək istəyən məktəblilər, tələbələr və ya böyüklər üçün (051) 207 24 63/64 nömrəsi ilə  əlaqə saxlayaraq endirimli təkliflərdən yararlana bilərsiniz." : "Для школьников, студентов или взрослых, желающих посетить группу, вы можете воспользоваться скидочными предложениями, обратившись по телефону (051) 207 24 63/64."}/>
                            </Accordion>  
                            <Accordion type="single" collapsible className="w-full">
                                <ItemFaq title={locale === "az" ? "Promo kodunu və ya endirim kuponunu necə tətbiq etmək olar? " : "Как применить промо-код или купон на скидку?"} desc={locale === "az" ? "Play10 tətbiqində kupon və ya bonusları QR ilə kassa təqdim edərək fürsətlərdən yararlana bilərsiz." : "В приложении Play10 вы можете воспользоваться возможностями, показав купоны или бонусы в кассу с QR-кодом."} />
                            </Accordion>                                                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqHome
