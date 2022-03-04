import type { NextPage } from "next"
import Head from "next/head"
import { logo } from "../contstants/images"

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Application Form</title>
                <meta name="description" content="Appplication to generate dynamic forms for Banks" />
                <link rel="icon" href={logo} />
            </Head>

            <main>
                <p>Welcome</p>
            </main>
        </div>
    )
}

export default Home
