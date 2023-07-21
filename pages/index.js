import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Serdest Onat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/letter-s.png" />
      </Head>
      <div class="container">
        <Image
          src="/hopefullyfinal.png"
          alt="hey"
          height={921.6}
          width={1638.4}
        ></Image>
        <div className="projects">
          <Link href="https://www.linkedin.com/in/serdest-onat/">
            <button class="btn one">LinkedIn</button>
          </Link>
          <Link href="https://www.kariyer.net/ozgecmis/serdestonat?o=c15o ">
            <button class="btn two">Kariyer.net</button>
          </Link>
          <Link href="https://github.com/serdestonat">
            <button class="btn three">GitHub</button>
          </Link>
          <Link href="https://www.instagram.com/serdest.onat/?hl=tr">
            <button class="btn four">Instagram</button>
          </Link>
          <Link href="https://https://twitter.com/SerdestOn">
            <button class="btn four">Twitter</button>
          </Link>
        </div>
      </div>
    </>
  );
}
