import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Layout from "../components/layout";
import styles from "./index.module.css";

const Home: NextPage = () => {
    const text = '12345'

    const copy = async () => {
        await navigator.clipboard.writeText(text);
    }

  const [deferredPrompt, setDeferredPrompt] = useState(null);
    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          // @ts-ignore
          setDeferredPrompt(e);
        });
    })

    const firePrompt = () => {
      // @ts-ignore
      deferredPrompt.prompt();
      // @ts-ignore
      deferredPrompt.userChoice
        .then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('Accepted');
          } else {
            console.log('Dismissed');
          }
          setDeferredPrompt(null);
        });
    }

    return (
        <Layout>
          INTENT LINK
            <a style={{ margin: 50 }} onClick={copy}> use the app </a>
            <img src="/images/poster.jpeg"/>
          <button onClick={firePrompt}>FIRE INSTALL PROMPT</button>
        </Layout>
    )
}

export default Home
