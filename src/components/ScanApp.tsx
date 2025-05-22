"use client"
import Image from "next/image"
import React from 'react'
import { useLocale } from "next-intl";
import Link from "next/link";

function ScanApp() {
    const locale = useLocale();    
    return (
        <div className="relative w-full xl:min-h-[224px] lg:min-h-[224px] md:min-h-[194px] sm:min-h-[196px] bg-[#FFD554] 2xl:pt-26 xl:pt-26 lg:pt-20 md:pt-18 sm:pt-18 max-sm:pt-18 pb-5 overflow-unset">
			<div className="bg-[#ffffff] absolute left-0 right-0 mx-auto text-center w-full max-w-full flex flex-wrap justify-center 2xl:-top-3 xl:-top-3 lg:-top-4.5 md:-top-3.5 sm:top-6.5 max-sm:-top-6.5 z-2 [&>svg]:object-cover [&>svg]:relative 2xl:[&>svg]:-mb-7.5 xl:[&>svg]:-mb-13 lg:[&>svg]:-mb-12.5 md:[&>svg]:-mb-18.5 sm:[&>svg]:-mb-21.5 max-sm:[&>svg]:-mb-22  [&>svg>path]:fill-[#FFD554]">
				<svg width="2173" height="200" viewBox="0 0 1441 132" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-1.5 132C104.849 69.3795 234.669 46.3967 355.755 71.2381C400.73 80.4589 444.658 95.8901 490.508 98.7283C616.494 106.486 729.115 19.3478 854.262 2.95366C910.173 -4.34569 966.341 2.70138 1021.67 15.1473C1049.98 21.488 1078.12 29.2458 1105.85 37.1716C1111.91 38.8829 1117.92 40.6362 1123.95 42.3854C1200.08 64.1573 1277.45 85.7232 1356.38 82.3047C1398.7 80.4126 1441.97 69.9008 1479.5 50.4667V132H-1.5Z" fill="#FFD554"/>
				</svg>
			</div>
            <div className="2xl:w-[124px] xl:w-[100px] lg:w-[100px] sm:w-[86px] max-sm:w-[76px] absolute top-16 left-0 z-3 [&>img]:max-w-full">
                <Image src="/images/bg-clouds-left.png" alt="clouds left" width={124} height={199}/>
            </div>
            <div className="2xl:w-[124px] xl:w-[96px] lg:w-[96px] sm:w-[76px] max-sm:w-[66px] absolute top-30y right-0 z-3 [&>img]:max-w-full">
                <Image src="/images/bg-clouds-right.png" alt="clouds right" width={124} height={199}/>
            </div>
            <div className="wrapper relative">
                <div className="w-full flex flex-wrap lg:flex-row md:flex-row sm:flex-col max-sm:flex-col 2xl:overflow-hidden xl:overflow-hidden lg:overflow-hidden sm:overflow-hidden max-sm:overflow-[unset] items-center">
                    <div className="relative lg:w-3/10 md:w-3/10 sm:w-10/10 max-sm:w-10/10 flex justify-center px-4 2xl:[&>img]:w-9/10 xl:[&>img]:w-9/10 lg:[&>img]:w-9/10 md:[&>img]:w-9/10 sm:[&>img]:w-6/10 max-sm:[&>img]:w-6/10 [&>img]:z-5 [&>img]:relative 2xl:[&>img]:mt-0 xl:[&>img]:mt-0 md:[&>img]:mt-0 sm:[&>img]:-mt-9 max-sm:[&>img]:-mt-9">
                        <Image src="/images/Phone-Frame-Bacode.png" alt="scan app" width={262} height={530}/>
                    </div>
                    <div className="relative z-3 lg:w-4/10 md:w-4/10 sm:w-10/10 max-sm:w-10/10">
                        <div className="w-full text-center 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[15px] max-sm:text-[15px] text-[#2E273F] [&>p]:my-2 2xl:[&>h2]:text-5xl xl:[&>h2]:text-5xl lg:[&>h2]:text-5xl md:[&>h2]:text-4xl md:[&>h2]:leading-[30px] sm:[&>h2]:text-[2rem] max-sm:[&>h2]:text-[2rem] px-6 [&>h2]:text-c-dark 2xl:[&>h2]:pt-4 xl:[&>h2]:pt-4 lg:[&>h2]:pt-4 md:[&>h2]:pt-4 sm:[&>h2]:pt-16 max-sm:[&>h2]:pt-16 2xl:[&>h2]:pb-3 xl:[&>h2]:pb-3 lg:[&>h2]:pb-3 md:[&>h2]:pb-3 sm:[&>h2]:pb-3 max-sm:[&>h2]:pb-3 [&>h2]:font-extrabold">
                            <h2>{locale === "az" ? "Scan QR and download it now!" : "Отсканируйте QR-код и загрузите его прямо сейчас!"}</h2>
                            <p>{locale === "az" ? "Bu proqram kəşf etmək üçün bələdçiniz olacaq" : "Это приложение станет вашим проводником в поисках новых открытий."}</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center mb-4 2xl:mt-15 xl:mt-15 lg:mt-15 md:mt-15 sm:mt-16 max-sm:mt-16">
                            <div className="w-auto flex flex-wrap [&>a]:flex [&>a]:flex-wrap [&>a:first-child]:mr-2 [&>a:last-child]:ml-2">
                                <Link target="_blank" className="bg-white text-c-dark py-3 2xl:px-8 xl:px-8 md:px-8 sm:px-6 max-sm:px-6 font-extrabold text-[16px] rounded-3xl" href="https://apps.apple.com/us/app/play10/id6738125748">
                                    <div className="sm:w-[20px] max-sm:w-[20px]"><Image src="/images/apple-icon.png" alt="apple" width={24} height={24} /></div>
                                    <div className="ml-4"><p>App Store</p></div>
                                </Link>
                                <Link target="_blank" className="bg-white text-c-dark py-3 2xl:px-8 xl:px-8 md:px-8 sm:px-6 max-sm:px-6 font-extrabold text-[16px] rounded-3xl" href="https://play.google.com/store/apps/details?id=info.chaitech.blueplanet&pcampaignid=web_share">
                                    <div className="sm:w-[18px] max-sm:w-[18px]"><Image src="/images/playstore-icon.png" alt="apple" width={22} height={22} /></div>
                                    <div className="ml-4"><p>Play Store</p></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-2 lg:w-3/10 md:w-3/10 sm:w-10/10 max-sm:w-10/10 overflow-[unset] 2xl:h-[124px] xl:h-[124px] lg:h-[124px] md:h-[124px] sm:h-[348px] max-sm:h-[346px] bg-[#FFD554]">
                        <div className="w-full flex flex-wrap justify-center 2xl:[&>img]:-mt-[74%] xl:[&>img]:-mt-[74%] lg:[&>img]:-mt-[74%] md:[&>img]:-mt-[74%] sm:[&>img]:-mt-[5%] max-sm:[&>img]:-mt-[5%] [&>img]:absolute 2xl:[&>img]:max-w-[205%] xl:[&>img]:max-w-[205%] lg:[&>img]:max-w-[205%] md:[&>img]:max-w-[200%] sm:[&>img]:max-w-[132%] max-sm:[&>img]:max-w-[132%]"><Image src="/images/footer-image-animate.gif" alt="animate footer" width={1150} height={1293} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScanApp
