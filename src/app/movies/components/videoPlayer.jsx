import { useEffect, useState } from 'react';

const MovieVideoPlayer = ({ id }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set state to true when component mounts on client-side
    }, []);

    return (
        <section className="flex flex-col items-center">
            {isClient && (
                <div className="mb-4">
                    {/* Placeholder for any ad-related content */}
                    {/* You can add an empty div or any other content here */}
                </div>
            )}
            <iframe
                src={`https://vidsrc.pro/embed/movie/${id}`}
                allowFullScreen
                referrerPolicy="origin"
                height={720}
                className="w-full h-[240px] lg:h-[720px] rounded-lg"
            ></iframe>
        </section>
    );
};

export default MovieVideoPlayer;
