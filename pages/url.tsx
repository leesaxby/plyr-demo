import type { NextPage } from 'next'
import Layout from "../components/layout";
import styles from "./url.module.css";

const Url: NextPage = () => {
    return (
        <Layout>
            <video className={styles.player} id="player" poster="/images/poster.jpeg" playsInline controls>
                <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4" type="video/mp4"/>
            </video>
        </Layout>
    )
}

export default Url
