import type { NextPage } from 'next'
import Layout from "../components/layout";

const Url: NextPage = () => {
    return (
        <Layout>
            <video id="player" playsInline controls>
                <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4" type="video/mp4"/>
            </video>
        </Layout>
    )
}

export default Url
