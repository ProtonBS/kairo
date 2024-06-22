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
                    padding: 20px 50px;
                    color: #ffffff;
                    font-size: 24px;
                    text-transform: uppercase;
                    text-decoration: none;
                    background-color: #00bfff; /* Light blue */
                    border: none;
                    border-radius: 10px;
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
                    transition: background-color 0.3s, box-shadow 0.3s;
                    position: relative;
                    overflow: hidden;
                }

                .nav-button::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    box-shadow: 0 0 15px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff, 0 0 40px #00bfff, 0 0 50px #00bfff, 0 0 60px #00bfff, 0 0 75px #00bfff;
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .nav-button:hover::before {
                    opacity: 1;
                }

                .nav-button:hover {
                    background-color: #00e5ff; /* Light blue on hover */
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
                }
            `}</style>
        </main>
    );
}
