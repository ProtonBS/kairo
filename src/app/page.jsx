// pages/index.js (or pages/Home.js depending on your setup)

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
                    className="neon-button"
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
            <style jsx>{`
                .neon-button {
                    background-color: #1f1f1f;
                    border: 1px solid #444;
                    box-shadow: 0 0 10px #03ff03,
                                0 0 20px #03ff03,
                                0 0 30px #03ff03,
                                0 0 40px #03ff03,
                                0 0 50px #03ff03,
                                0 0 60px #03ff03,
                                0 0 70px #03ff03;
                    transition: background-color 0.3s, box-shadow 0.3s;
                }

                .neon-button:hover {
                    background-color: #000;
                    box-shadow: 0 0 5px #03ff03,
                                0 0 15px #03ff03,
                                0 0 25px #03ff03,
                                0 0 35px #03ff03,
                                0 0 45px #03ff03,
                                0 0 55px #03ff03,
                                0 0 65px #03ff03;
                }

                .neon-button .card-body {
                    padding: 20px; /* Example of styling the CardBody */
                }
            `}</style>

            <section className="flex h-screen justify-center items-center lg:flex-row">
                {homePageCards("anime")}
                {homePageCards("movies")}
                {homePageCards("kdrama")}
                {homePageCards("web-series")}
            </section>
        </main>
    );
}
