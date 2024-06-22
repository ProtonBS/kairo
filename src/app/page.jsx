// pages/index.js or pages/Home.js

import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
    const homePageCards = (title) => {
        return (
            <Link href={`/${title}`} className="focus:scale-90 mb-2 lg:mx-1">
                <Card
                    isPressable
                    shadow="sm"
                    isHoverable
                    className="bg-[#1f1f1f] border border-zinc-500 neon-button"
                >
                    <CardBody>
                        <p className="text-xl lg:text-2xl text-white">{title}</p>
                    </CardBody>
                </Card>
            </Link>
        );
    };

    return (
        <main>
            <section className="flex h-[90vh] w-screen justify-center items-center lg:flex-row">
                {homePageCards("anime")}
                {homePageCards("movies")}
                {homePageCards("kdrama")}
                {homePageCards("web-series")}
            </section>
        </main>
    );
}
