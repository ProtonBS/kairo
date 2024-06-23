import { useEffect, useState } from 'react';

const MovieVideoPlayer = ({ id }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set state to true when component mounts on client-side
        // Load ad script dynamically
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://securepubads.shareusads.com/scripts/tag/js/sgpt.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Once script is loaded, define the ad slot
            window._shareustag = window._shareustag || { cmd: [] };
            window._shareustag.cmd.push(function() {
                var slot1 = window._shareustag.defineSlot(
                    '/shareusadx/6739644104098893/3323887418/AniEo Banner 1',
                    ["Responsive"],
                    'shareusadx-6739644104098893-3323887418'
                );
                // Optionally, refresh ad slot if needed
                // slot1.refresh();
            });
        };

        return () => {
            // Clean up: remove the script from the document on component unmount
            document.body.removeChild(script);
        };
    }, []);

    // Render the component
    return (
        <section className="flex flex-col items-center">
            {isClient && (
                <div id="shareusadx-6739644104098893-3323887418" className="mb-4"></div>
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
