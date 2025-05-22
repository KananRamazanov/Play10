import Header from "@/components/Header";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";

export default async function RootLayout({
	children,
	params,
}: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const messages = await getMessages();

	return (
		<html className="overflow-x-clip" lang={locale}>
			<head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"/>			
			<title>Play10</title>
			<meta name="description" content="Ölkənin ən böyük əyləncə bələdçisi."/>	
			<link rel="icon" href="/images/favicon.ico" type="image/x-icon" sizes="48x48"/>
			<link rel="icon" href="/images/icon.png" type="image/png" sizes="96x96"/>
			</head>
			<body suppressHydrationWarning={true}>
				<NextIntlClientProvider messages={messages}>
					<div id="top"/>
					<Header/>
					{children}
					<Footer/>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
