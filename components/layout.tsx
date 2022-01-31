import Head from 'next/head'
import Link from 'next/link'
import styles from "./layout.module.css";

type Props = {
    children: React.ReactNode,
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Plyr Demo</title>
                <meta name="description" content="Plyr video demo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav className={styles.nav}>
                    <Link href="/">
                        <a>YOUTUBE</a>
                    </Link>
                    -
                    <Link href="/local">
                        <a>LOCAL FILE</a>
                    </Link>
                    -
                    <Link href="/url">
                        <a>URL SOURCE (with poster image)</a>
                    </Link>
                </nav>
            </header>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout
