import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export async function getServerSideProps() {
    // Redirect to /anime page
    return {
        redirect: {
            destination: '/anime',
            permanent: false, // Set to true if the redirect is permanent
        },
    };
}

export default function Home() {
	const homePageCards = (title) => {
		return (
			<Link href={`/${title}`} className="focus:scale(90) mb-2 lg:mx-1">
				<Card
					isPressable
					shadow="sm"
					isHoverable
					className="bg-[#1f1f1f] border border-zinc-500"
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
			<section className="flex h-[90dvh] w-screen flex-col items-center justify-center lg:flex-row">
				{homePageCards("anime")}
				{homePageCards("movies")}
				{homePageCards("kdrama")}
				{homePageCards("manga")}
				{homePageCards("web-series")}
			</section>
		</main>
	);
}

// Test push

