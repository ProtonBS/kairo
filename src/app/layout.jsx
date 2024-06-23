import "./globals.css";
import Header from "./components/header/header";
import { lexend } from "../../config/fonts";

import { Providers } from "./themeManager";

export const metadata = {
	title: "Ani.MoM",
	description:
		"Best Website to watch kdramas and anime for free. You can also read and download mangas for free.",
	generator: "Next.js",
	applicationName: "Ani.MoM",
	creator: "Higan",
	keywords: [
		"Kdrama",
		"Anime",
		"Manga",
		"Watch Online",
		"watch kdrama free",
		"watch anime free online",
		"kdrama for free",
		"watch online",
		"read mangas for free",
		"mangas online",
		"movies online",
		"free movies online",
		"watch series for free",
	],
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
		other: {
			me: ["https://telegram.dog/zoronewera"],
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={lexend.className}>
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
