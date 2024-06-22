import Link from "next/link";

export default function Home() {
    const neonButton = (title, href) => {
        return (
            <Link href={href} key={title}>
                <a className="neon-button">{title}</a>
            </Link>
        );
    };

    return (
        <main className="main-container">
            <section className="buttons-container">
                {neonButton("Movies", "/movies")}
                {neonButton("Anime", "/anime")}
                {neonButton("K-Drama", "/kdrama")}
                {neonButton("Web Series", "/web-series")}
            </section>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    background-color: #121212;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    overflow: hidden;
                }

                .main-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    text-align: center;
                }

                .buttons-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .neon-button {
                    display: inline-block;
                    padding: 15px 30px;
                    color: #fff;
                    font-size: 20px;
                    text-transform: uppercase;
                    text-decoration: none;
                    background-color: #1f1f1f;
                    border: 2px solid #00ff99;
                    border-radius: 5px;
                    box-shadow: 0 0 5px #00ff99, 0 0 10px #00ff99, 0 0 20px #00ff99, 0 0 30px #00ff99;
                    transition: box-shadow 0.3s ease-in-out;
                    text-align: center;
                    position: relative;
                }

                .neon-button::before,
                .neon-button::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 2px solid #00ff99;
                    border-radius: 5px;
                    box-shadow: 0 0 5px #00ff99, 0 0 10px #00ff99, 0 0 20px #00ff99, 0 0 30px #00ff99;
                    transition: all 0.3s ease-in-out;
                    opacity: 0;
                }

                .neon-button:hover::before,
                .neon-button:hover::after {
                    opacity: 1;
                    transform: scale(1.1);
                }

                .neon-button::before {
                    transform: translate(-10px, -10px);
                }

                .neon-button::after {
                    transform: translate(10px, 10px);
                }

                .neon-button:hover {
                    box-shadow: 0 0 10px #00ff99, 0 0 20px #00ff99, 0 0 30px #00ff99, 0 0 40px #00ff99;
                }
            `}</style>
        </main>
    );
}
