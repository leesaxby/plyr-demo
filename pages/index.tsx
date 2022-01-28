import type { NextPage } from 'next'
import Layout from "../components/layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <div id="player">
                <iframe
                    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                    allow="autoplay">
                </iframe>
            </div>
        </Layout>
    )
}

export default Home
