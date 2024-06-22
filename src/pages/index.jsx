import Link from "next/link";

export default function Home() {
    return (
        <main className="main-container">
            <section className="buttons-container">
                <Link href="/movies">
                    <a className="nav-button">Movies</a>
                </Link>
                <Link href="/anime">
                    <a className="nav-button">Anime</a>
                </Link>
                <Link href="/kdrama">
                    <a className="nav-button">K-Drama</a>
                </Link>
                <Link href="/web-series">
                    <a className="nav-button">Web Series</a>
                </Link>
            </section>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    background-color: #000000;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                    position: relative; /* Ensure relative positioning for absolute children */
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    z-index: 0; /* Ensure buttons are behind the liquid effect */
                }

                .nav-button {
                    position: relative;
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
                    overflow: hidden;
                    transition: background-color 0.3s, box-shadow 0.3s;
                    /* Neon effect */
                    background-image: linear-gradient(
                        to right,
                        #00bfff 0%,
                        #00e5ff 100%
                    );
                    /* 3D shadow */
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
                    z-index: 1; /* Ensure buttons are above the liquid effect */
                }

                .nav-button::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 300%; /* Make sure the liquid effect spans around the button */
                    height: 300%;
                    background-color: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    animation: pulse 4s linear infinite; /* Adjust animation duration and timing as desired */
                    z-index: -1;
                    pointer-events: none; /* Ensure the pseudo-element doesn't interfere with pointer events */
                    opacity: 0; /* Initially hide to avoid covering the button text */
                }

                @keyframes pulse {
                    0% {
                        transform: scale(0);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1);
                        opacity: 0.1;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                .nav-button:hover {
                    background-color: #00e5ff; /* Light blue on hover */
                    box-shadow: 0 8px 35px rgba(0, 0, 0, 0.8);
                }
            `}</style>
        </main>
    );
}
