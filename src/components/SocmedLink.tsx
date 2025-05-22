import { motion } from "framer-motion";
import { Link } from "@/i18n/routing"

export default function SocmedLink({width}:{width:number}) {
	return (
				<div className="relative flex justify-center gap-5 mt-[90px]">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -54, opacity: 0 }}
						transition={{ duration: 0.3 }}
						whileHover={{ 
							rotateX: 20,
							rotateY: -20,
							scale: 1.05,				
							}}
						whileTap={{
							scale: 0.95,
							rotateX: 0,
							rotateY: 0,
						}}			 
						style={{
							transformStyle: 'preserve-3d',
							perspective: 2000, 
						}}			 
						>
							<Link href="https://www.instagram.com/play10.az/" target="_blank" className="group transition-all duration-300">
								<svg width={width} height={width} viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
									<title>instagram</title>
									<ellipse cx="28.75" cy="28.5957" rx="28" ry="28.5957" fill="#280066"/>
									<circle cx="28.9477" cy="27.0062" r="26.4105" className="fill-[#B180FF] transition-all duration-300 group-hover:fill-c-logo-purple"/>
									<rect x="15.9479" y="14.6021" width="25.6043" height="25.3064" rx="7.44043" fill="#FEF7E6" stroke="#2E0A8E" strokeWidth="1.8"/>
									<circle cx="28.75" cy="27.4042" r="5.05745" fill="#FEF7E6" stroke="#2E0A8E" strokeWidth="1.8"/>
									<circle cx="35.4521" cy="20.1064" r="1.33404" fill="#FEF7E6" stroke="#2E0A8E" strokeWidth="1.8"/>
								</svg>							
							</Link>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -54, opacity: 0 }}
						transition={{ duration: 0.3 }}
						whileHover={{ 
							rotateX: 20,
							rotateY: -20,
							scale: 1.05,				
						}}
						whileTap={{
							scale: 0.95,
							rotateX: 0,
							rotateY: 0,
						}}			 
						style={{
							transformStyle: 'preserve-3d',
							perspective: 2000, 
						}}			 
					>
						<Link href="https://www.facebook.com/people/Play10/61569375512360/" target="_blank" className="group transition-all duration-300">
							<svg width={width} height={width} viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<title>facebook</title>
								<ellipse cx="28.75" cy="28.5957" rx="28" ry="28.5957" fill="#280066"/>
								<circle cx="28.9477" cy="27.0062" r="26.4105" className="fill-[#B180FF] transition-all duration-300 group-hover:fill-c-logo-purple"/>
								<path d="M36.0532 20.6183H33.4312C32.2747 20.6183 31.9718 20.9012 31.8687 21.0548C31.8005 21.1564 31.7478 21.3039 31.7173 21.5343C31.6859 21.7713 31.6841 22.0374 31.6841 22.3702V24.1222H36.2632L36.0308 25.0538L34.7827 30.0577L34.6411 30.6271H31.6841V41.2609H25.1919V30.6271H21.4468V24.1222H25.1919V21.3693C25.1919 19.3033 25.8487 17.6242 27.0464 16.463C28.2397 15.3061 29.8908 14.7394 31.7368 14.7394C33.3837 14.7394 34.9546 14.8615 35.4019 14.921L36.0532 15.0079V20.6183Z" fill="#FEF7E6" stroke="#2E0A8E" strokeWidth="1.5"/>
							</svg>								
						</Link>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -54, opacity: 0 }}
						transition={{ duration: 0.3 }}
						whileHover={{ 
							rotateX: 20,
							rotateY: -20,
							scale: 1.05,				
						}}
						whileTap={{
							scale: 0.95,
							rotateX: 0,
							rotateY: 0,
						}}			 
						style={{
							transformStyle: 'preserve-3d',
							perspective: 2000, 
						}}			 
					>
						<Link href="https://www.linkedin.com/company/caspian-entertainment/" target="_blank" className="group transition-all duration-300">
							<svg width={width} height={width} viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<title>linkedin</title>
								<ellipse cx="28.75" cy="28.5957" rx="28" ry="28.5957" fill="#280066"/>
								<circle cx="28.9477" cy="27.0062" r="26.4105" className="fill-[#B180FF] transition-all duration-300 group-hover:fill-c-logo-purple"/>
								<path d="M24.9994 19.9247V35.1161H19.3724V19.9247H24.9994ZM33.4955 19.9813C34.5897 19.5475 35.8608 19.3937 37.0756 19.5936C38.2936 19.7941 39.4749 20.3551 40.3519 21.3671C41.2322 22.3828 41.7659 23.8075 41.766 25.663V35.1161H36.2523V27.1259C36.2523 26.1148 35.9509 25.4402 35.5619 25.0282C35.1719 24.6151 34.6549 24.4231 34.1322 24.4393C33.1091 24.4713 31.9761 25.3241 31.976 27.1259V35.1161H26.4623V19.9247H32.1224L32.0873 20.5194L32.0707 20.7889C32.4954 20.4561 32.9807 20.1854 33.4955 19.9813ZM22.1859 13.7352C23.6404 13.7352 24.8871 15.0189 24.8871 16.5487C24.8869 17.6946 24.1741 18.6484 23.2533 19.1747L23.2133 19.1971L23.1713 19.2128C22.0954 19.6162 20.8414 19.3743 20.1 18.5214L19.9535 18.3632C19.2611 17.5616 19.0064 16.4 19.5326 15.4227C19.9752 14.2775 20.9999 13.7353 22.1859 13.7352Z" fill="#FEF7E6" stroke="#2E0A8E" strokeWidth="1.1253" strokeMiterlimit="10"/>
							</svg>
						</Link>
					</motion.div>
				</div>

	)
}
