"use client";
import React from 'react'
import { TiStar } from "react-icons/ti";
import Slider from "react-slick";
import { useLocale } from "next-intl";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
infinite: true,
speed: 10800, 
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 0, 
cssEase: "linear",
arrows: false, 
pauseOnHover: false,
centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

function CostumerReview() {
    const locale = useLocale();
    return (
        <div className="w-full relative pt-18 pb-18">
            <div className="w-full bg-white">
                <div className="mx-auto py-8 min-h-[120px] relative w-full lg:w-4/10 md:w-4/10 sm:w-10/10 max-sm:w-10/10 text-center 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[15px] max-sm:text-[15px] text-[#807d8a] [&>p]:my-5 2xl:[&>h2]:text-5xl xl:[&>h2]:text-5xl lg:[&>h2]:text-5xl md:[&>h2]:text-5xl sm:[&>h2]:text-[2rem] max-sm:[&>h2]:text-[2rem] [&>h2]:text-c-dark [&>h2]py-4 [&>h2]:font-extrabold">
                    <h2>{locale === "az" ? "Müştəri rəyləri" : "Отзывы клиентов"}</h2>
                    <p>{locale === "az" ? "Müştərilərimizin bizim haqqımızda nə düşündüklərini kəşf edin! Onların rəyləri bizim keyfiyyətimizi və xidmət səviyyəmizi əks etdirir." : "Узнайте, что думают о нас наши клиенты! Их отзывы отражают наше качество и уровень обслуживания."}</p>
                </div>
            </div>
            <div className="flex w-full bg-white overflow-[unset]">

                <div className="relative slider-container w-full 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-5 max-sm:p-4.5 overflow-[unset]">
                    <Slider {...settings}>
                            <div className="wrp-card flex flex-col [&>div]:ml-0 [&>div]:mr-0">
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#fffee9] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Luna  William</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-400' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Play10 tətbiqi ilə park ziyarətlərimiz daha sərfəli oldu! Giriş biletləri üçün cashback və bonus sistemi sayəsində hər səfərdən əlavə qazanc əldə edirəm. Yemək və içkilərə endirimlər isə ailə günlərimizi daha da unudulmaz edir. Mən bunu hər kəsə tövsiyə edirəm! 🌟" : "С приложением Play10 наши походы в парк стали доступнее! Благодаря кэшбэку и бонусной системе за входные билеты я получаю дополнительный заработок с каждого посещения. А скидки на еду и напитки делают наши семейные дни еще более незабываемыми. Рекомендую всем! 🌟"}</p>
                                    </div>
                                </div>
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#e6fcdc] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Farida Mamedova</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-400' />
                                        <TiStar className='text-gray-400' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Hər dəfə ziyarət etdiyim zaman bonuslar qazanmaq çox həvəsləndiricidir. Parkdakı Fərdi təkliflər və endirimlər sayəsində Ailə Əyləncəsi indi həm sərfəli, həm də çox əyləncəlidir. Təşəkkürlər, Play10! 🎢🎉" : "Очень мотивирует зарабатывать бонусы каждый раз, когда я посещаю. Благодаря индивидуальным предложениям и скидкам в Парке, Семейные развлечения теперь и выгодны, и очень веселы. Спасибо, Play10! 🎢🎉"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="wrp-card flex flex-col">
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#f5eeff] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Luna William</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Play10 proqramını yüklədikdən sonra park ziyarətləri bizim üçün həm əyləncəli, həm də qənaətcil oldu. Mən hər giriş bileti üçün cashback qazanıram və topladığım bonuslarla gələcək səfərlərimizi daha ucuz edə bilərik. Üstəlik, yemək və içkilərdə endirimlər də uşaqların sevimlisidir. Hər həftə sonunu parkda keçirmək artıq ənənəmizə çevrilib! 😊" : "После загрузки приложения Play10 посещение парка стало для нас и веселым, и экономичным. Я получаю кэшбэк за каждый входной билет, а с помощью накопленных бонусов мы можем сделать наши будущие поездки дешевле. Более того, скидки на еду и напитки также являются любимыми у детей. Это уже стало нашей традицией проводить каждые выходные в парке! 😊"}</p>
                                    </div>
                                </div>
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#ffeefd] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Jony Smith</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Uşağımız Montessori proqramında inkişaf edir! Təcrübəli öyrənmə onların marağına səbəb oldu və 😇 🤩 biz onların müstəqillik və tənqidi düşünmə bacarıqlarında nəzərəçarpacaq inkişaf müşahidə etdik" : "Наш ребенок преуспевает в программе Монтессори! Практическое обучение пробудило в нем любопытство, и 😇 🤩 мы заметили значительное развитие его навыков самостоятельности и критического мышления"}</p>
                                    </div>
                                </div>                    
                            </div>

                            <div className="wrp-card flex flex-col">
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#e6fcdc] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Anastasia Leo</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-400' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Play10 tətbiqi ilə park ziyarətlərimiz daha sərfəli oldu! Giriş biletləri üçün cashback və bonus sistemi sayəsində hər səfərdən əlavə qazanc əldə edirəm. Yemək və içkilərə endirimlər isə ailə günlərimizi daha da unudulmaz edir. Mən bunu hər kəsə tövsiyə edirəm! 🌟" : "С приложением Play10 наши походы в парк стали доступнее! Благодаря кэшбэку и бонусной системе за входные билеты я получаю дополнительный заработок с каждого посещения. А скидки на еду и напитки делают наши семейные дни еще более незабываемыми. Рекомендую всем! 🌟"}</p>
                                    </div>
                                </div>
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#fffee9] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Luna William</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Hər dəfə ziyarət etdiyim zaman bonuslar qazanmaq çox həvəsləndiricidir. Parkdakı Fərdi təkliflər və endirimlər sayəsində Ailə Əyləncəsi indi həm sərfəli, həm də çox əyləncəlidir. Təşəkkürlər, Play10! 🎢🎉" : "Очень мотивирует зарабатывать бонусы каждый раз, когда я посещаю. Благодаря индивидуальным предложениям и скидкам в Парке, Семейные развлечения теперь и выгодны, и очень веселы. Спасибо, Play10! 🎢🎉"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="wrp-card flex flex-col">
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#ffeefd] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Jony Smith</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Uşağımız Montessori proqramında inkişaf edir! Təcrübəli öyrənmə onların marağına səbəb oldu və 😇 🤩 biz onların müstəqillik və tənqidi düşünmə bacarıqlarında nəzərəçarpacaq inkişaf müşahidə etdik" : "Наш ребенок преуспевает в программе Монтессори! Практическое обучение пробудило в нем любопытство, и 😇 🤩 мы заметили значительное развитие его навыков самостоятельности и критического мышления"}</p>
                                    </div>
                                </div>                      
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#f5eeff] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Anastasia Leo</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Play10 proqramını yüklədikdən sonra park ziyarətləri bizim üçün həm əyləncəli, həm də qənaətcil oldu. Mən hər giriş bileti üçün cashback qazanıram və topladığım bonuslarla gələcək səfərlərimizi daha ucuz edə bilərik. Üstəlik, yemək və içkilərdə endirimlər də uşaqların sevimlisidir. Hər həftə sonunu parkda keçirmək artıq ənənəmizə çevrilib! 😊" : "После загрузки приложения Play10 посещение парка стало для нас и веселым, и экономичным. Я получаю кэшбэк за каждый входной билет, а с помощью накопленных бонусов мы можем сделать наши будущие поездки дешевле. Более того, скидки на еду и напитки также являются любимыми у детей. Это уже стало нашей традицией проводить каждые выходные в парке! 😊"}</p>
                                    </div>
                                </div>                  
                            </div>

                            <div className="wrp-card flex flex-col">
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#fffee9] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Luna William</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Hər dəfə ziyarət etdiyim zaman bonuslar qazanmaq çox həvəsləndiricidir. Parkdakı Fərdi təkliflər və endirimlər sayəsində Ailə Əyləncəsi indi həm sərfəli, həm də çox əyləncəlidir. Təşəkkürlər, Play10! 🎢🎉" : "Очень мотивирует зарабатывать бонусы каждый раз, когда я посещаю. Благодаря индивидуальным предложениям и скидкам в Парке, Семейные развлечения теперь и выгодны, и очень веселы. Спасибо, Play10! 🎢🎉"}</p>
                                    </div>
                                </div>                    
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#e6fcdc] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Anastasia Leo</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-400' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Play10 tətbiqi ilə park ziyarətlərimiz daha sərfəli oldu! Giriş biletləri üçün cashback və bonus sistemi sayəsində hər səfərdən əlavə qazanc əldə edirəm. Yemək və içkilərə endirimlər isə ailə günlərimizi daha da unudulmaz edir. Mən bunu hər kəsə tövsiyə edirəm! 🌟" : "С приложением Play10 наши походы в парк стали доступнее! Благодаря кэшбэку и бонусной системе за входные билеты я получаю дополнительный заработок с каждого посещения. А скидки на еду и напитки делают наши семейные дни еще более незабываемыми. Рекомендую всем! 🌟"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="wrp-card flex flex-col">
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#fffee9] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Luna  William</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-400' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Play10 tətbiqi ilə park ziyarətlərimiz daha sərfəli oldu! Giriş biletləri üçün cashback və bonus sistemi sayəsində hər səfərdən əlavə qazanc əldə edirəm. Yemək və içkilərə endirimlər isə ailə günlərimizi daha da unudulmaz edir. Mən bunu hər kəsə tövsiyə edirəm! 🌟" : "С приложением Play10 наши походы в парк стали доступнее! Благодаря кэшбэку и бонусной системе за входные билеты я получаю дополнительный заработок с каждого посещения. А скидки на еду и напитки делают наши семейные дни еще более незабываемыми. Рекомендую всем! 🌟"}</p>
                                    </div>
                                </div>
                                <div className="min-h-[86px] lg:w-[298px] w-auto mx-2 bg-[#e6fcdc] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Farida Mamedova</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Hər dəfə ziyarət etdiyim zaman bonuslar qazanmaq çox həvəsləndiricidir. Parkdakı Fərdi təkliflər və endirimlər sayəsində Ailə Əyləncəsi indi həm sərfəli, həm də çox əyləncəlidir. Təşəkkürlər, Play10! 🎢🎉" : "Очень мотивирует зарабатывать бонусы каждый раз, когда я посещаю. Благодаря индивидуальным предложениям и скидкам в Парке, Семейные развлечения теперь и выгодны, и очень веселы. Спасибо, Play10! 🎢🎉"}</p>
                                    </div>
                                </div>
                            </div>  

                            <div className="wrp-card flex flex-col">
                                <div className="min-h-[86px] w-[298px] bg-[#ffeefd] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Jony Smith</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Uşağımız Montessori proqramında uğur qazanır! Təcrübəli öyrənmə onların marağına səbəb oldu və 😇 🤩 biz onların müstəqillik və tənqidi düşünmə bacarıqlarında nəzərəçarpacaq inkişaf müşahidə etdik" : "Наш ребенок преуспевает в программе Монтессори! Практическое обучение разожгло его любопытство, и 😇 🤩 мы заметили значительное развитие его навыков независимости и критического мышления"}</p>
                                    </div>
                                </div>                      
                                <div className="min-h-[86px] w-[298px] bg-[#f5eeff] border-1 border-[#EEEEEE] 2xl:p-8 xl:p-8 lg:p-8 md:p-7 sm:p-6 max-sm:p-4 rounded-3xl mb-8">
                                    <div className="w-full flex [&>h5]:text-[18px] [&>h5]:text-[#313131] [&>h5]:font-bold [&>h5]:mb-1">
                                        <h5>Anastasia Leo</h5>
                                    </div>
                                    <div className="w-full flex items-center mb-5 [&>svg:first-child]:ml-0">
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                        <TiStar className='text-gray-950' />
                                    </div>
                                    <div className="w-full flex [&>p]:text-[14px] [&>p]:text-[#313131] [&>p]:mb-0">
                                        <p>{locale === "az" ? "Play10 proqramını yüklədikdən sonra park ziyarətləri bizim üçün həm əyləncəli, həm də qənaətcil oldu. Mən hər giriş biletinə görə cashback qazanıram və topladığım bonuslarla gələcək səfərlərimizi daha ucuz edə bilərik. Üstəlik, yemək və içkilərdə endirimlər də uşaqların sevimlisidir. Hər həftə sonunu parkda keçirmək artıq ənənəmizə çevrilib! 😊" : "После загрузки приложения Play10 посещение парка стало для нас и веселым, и экономичным. Я получаю кэшбэк за каждый входной билет, а с помощью накопленных бонусов мы можем сделать наши будущие поездки дешевле. Более того, скидки на еду и напитки также являются любимыми у детей. Это уже стало нашей традицией проводить каждые выходные в парке! 😊"}</p>
                                    </div>
                                </div>                  
                            </div>

                </Slider>
                <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.02)_9%,rgba(255,255,255,0.14)_22%,rgba(255,255,255,0.24)_35%,rgba(255,255,255,0.67)_47%,rgba(255,255,255,0.74)_60%,rgba(255,255,255,0.82)_74%,rgba(255,255,255,0.96)_100%)] min-h-[376px] w-full absolute z-3 bottom-0 top-[unset]"/>
            </div>

        </div>

    </div>
        
    )
}

export default CostumerReview
