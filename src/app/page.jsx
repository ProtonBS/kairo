import { useEffect } from 'react';
import { useNavigation } from 'next/navigation'; // Import useNavigation instead of useRouter
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
    const navigation = useNavigation(); // Use useNavigation hook

    useEffect(() => {
        // Redirect to the target directory
        navigation.navigate('/anime');
    }, [navigation]);

    // Optionally, you can conditionally render the original content if needed
    // For example, show the content for a few seconds before redirecting
    // Remove the return statement below if you want immediate redirection
    return null;

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
