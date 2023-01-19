import Layout from "../components/layout";
import Link from "next/link";

const Local: any = ({ name }: { name: string} ) => {
    return (
        <Layout>
            <h1>{name}</h1>
            <video id="player" playsInline controls>
                <source src="/video/local-video.mp4" type="video/mp4"/>
            </video>
            <Link href="/url">
                <a>URL SOURCE (with poster image)</a>
            </Link>
        </Layout>
    )
}

export default Local

export async function getServerSideProps(context: any) {
    return {
        props: {
            name: context.query.tester
        },
    }
}
