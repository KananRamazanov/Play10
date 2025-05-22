import Hello from "@/components/Hello";
import MainBanner from "@/components/MainBanner";
import Play10Info from "@/components/Play10Info";
import ScanApp from "@/components/ScanApp";
import CostumerReview from "@/components/CostumerReview";
import FaqHome from "@/components/FaqHome";
import { useTranslations } from "next-intl";
import GettoKnow from "@/components/GettoKnow";

export default function HomePage() {
	const t = useTranslations("HomePage");

	return (
		<div>			
			<MainBanner/>
			<Hello/>
			<div id="play10">
				<Play10Info/>
			</div>
			<div id="gettoknow">
				<GettoKnow/>
			</div>
			<div id="faq">
				<FaqHome/>
			</div>
			<div id="review">
				<CostumerReview/>
			</div>
			<div id="downloadapp">
			<ScanApp/>
			</div>
		</div>
	);
}
