import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
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
            <div className="w-full bg-blue-500 text-white text-center p-2">
                You may see some ads while watching content on our website. If you get redirected to a different page, close that page and you may continue watching.
            </div>
            <section className="flex h-[90dvh] w-screen flex-col items-center justify-center lg:flex-row">
                {homePageCards("anime")}
                {homePageCards("movies")}
                {homePageCards("kdrama")}
                {homePageCards("web-series")}
            </section>
        </main>
    );
}
