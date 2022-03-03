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

          console.log('beforeinstallprompt')
          alert('beforeinstallprompt')

          // @ts-ignore
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          // @ts-ignore
          deferredPrompt.userChoice
          // @ts-ignore
            .then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                alert('User accepted the A2HS prompt');
              } else {
                ('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        });
    })

    return (
        <Layout>
            HOME
        </Layout>
    )
}

export default Home