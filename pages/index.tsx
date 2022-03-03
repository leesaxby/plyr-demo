import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Layout from "../components/layout";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
    useEffect(() => {
        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (e) => {
          console.log(e)
          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later.
          // @ts-ignore
          setDeferredPrompt(e);
        });
    })

    const firePrompt = () => {
      console.log(deferredPrompt)
      // @ts-ignore
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      // @ts-ignore
      deferredPrompt.userChoice
        .then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          setDeferredPrompt(null);
        });
    }

    return (
        <Layout>
            <a href="intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end"> Take a QR code </a>

          <button onClick={firePrompt}>FIRE PROMPT</button>
            HOME
        </Layout>
    )
}

export default Home