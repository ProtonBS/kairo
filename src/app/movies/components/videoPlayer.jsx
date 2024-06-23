import { useEffect } from 'react';

const MovieVideoPlayer = async ({ id: id }) => {
    const videoFrameGenerator = (id) => {
        return (
            <iframe
                src={`https://vidsrc.pro/embed/movie/${id}`}
                allowFullScreen
                referrerPolicy="origin"
                height={720}
                className="w-full h-[240px] lg:h-[720px] rounded-lg"
            ></iframe>
        );
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://securepubads.shareusads.com/scripts/tag/js/sgpt.js';
        document.body.appendChild(script);

        script.onload = () => {
            window._shareustag = window._shareustag || { cmd: [] };
            window._shareustag.cmd.push(function() {
                var slot1 = window._shareustag.defineSlot(
                    '/shareusadx/6739644104098893/3323887418/AniEo Banner 1',
                    ["Responsive"],
                    'shareusadx-6739644104098893-3323887418'
                );
            });
        };
    }, []);

    return (
        <section className="flex flex-col items-center">
            <div id="shareusadx-6739644104098893-3323887418" className="mb-4"></div>
            {videoFrameGenerator(id)}
        </section>
    );
};

export default MovieVideoPlayer;
