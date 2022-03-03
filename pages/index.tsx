import type { NextPage } from 'next'
import Layout from "../components/layout";
import styles from "./index.module.css";

const Home: NextPage = () => {
    return (
        <Layout>
            <div
                id="player"
                className={styles.player}>
                <iframe
                        className={styles.player}
                        src="https://www.youtube.com/embed/DJZQ0FldHOI"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </Layout>
    )

export default Home
