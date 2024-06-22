import Link from "next/link";

export default function Home() {
    const navButton = (title, href) => {
        return (
            <Link href={href} key={title}>
                <a className="nav-button">{title}</a>
            </Link>
        );
    };

    return (
        <main className="main-container">
            <section className="buttons-container">
                {navButton("Movies", "/movies")}
                {navButton("Anime", "/anime")}
                {navButton("K-Drama", "/kdrama")}
                {navButton("Web Series", "/web-series")}
            </section>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    background-color: #000000;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .main-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .buttons-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .nav-button {
                    display: inline-block;
                    padding: 15px 40px;
                    color: #ffffff;
                    font-size: 24px;
                    text-transform: uppercase;
                    text-decoration: none;
                    background-color: #e50914;
                    border: none;
                    border-radius: 5px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
                    transition: transform 0.2s ease-in-out;
                }

                .nav-button:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </main>
    );
}
