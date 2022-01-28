import type { NextPage } from 'next'
import Layout from "../components/layout";

const Local: NextPage = () => {
    return (
        <Layout>
            <video id="player" playsInline controls>
                <source src="/video/local-video.mp4" type="video/mp4"/>
            </video>
        </Layout>
    )
}

export default Local
