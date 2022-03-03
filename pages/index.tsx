import type { NextPage } from 'next'
import { useEffect } from 'react';
import Layout from "../components/layout";
import styles from "./index.module.css";

const Home: NextPage = () => {
    useEffect(() => {
        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (e) => {
          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;
        });

        console.log('beforeinstallprompt')
        alert('beforeinstallprompt')
    })

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
}

export default Home