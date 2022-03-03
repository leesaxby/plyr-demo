import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Layout from "../components/layout";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          // @ts-ignore
          setDeferredPrompt(e);
        });

        // Solutions requires android app manifest to point to website.
        // @ts-ignore
        navigator.getInstalledRelatedApps().then(relatedApps => {
          for (let app of relatedApps) {
            console.log(app.platform);
            console.log(app.url);
            console.log(app.id);
          }
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
            <a href="intent://scan/#Intent;scheme=thegymgroup;package=com.netpulse.mobile.thegymgroup;end"> use the app </a>

          <button onClick={firePrompt}>FIRE INSTALL PROMPT</button>
        </Layout>
    )
}

export default Home