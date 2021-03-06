import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <title>Fluid Mechanics</title>
                <link rel="icon" href="images/fav.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
