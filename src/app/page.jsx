import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
	const homePageCards = (title) => {
		return (
			<Link href={`/${title}`} className="flex-1 focus:scale-105 mb-4 lg:mx-2">
				<Card
					isPressable
					shadow="sm"
					isHoverable
					className="bg-[#1f1f1f] border border-zinc-500 w-full"
				>
					<CardBody>
						<p className="text-xl lg:text-2xl">{title}</p>
					</CardBody>
				</Card>
			</Link>
		);
	};

	return (
		<main>
			<section className="flex flex-wrap justify-center gap-4 lg:justify-between lg:flex-row">
				{homePageCards("anime")}
				{homePageCards("movies")}
				{homePageCards("kdrama")}
				{homePageCards("web-series")}
			</section>
		</main>
	);
}
