import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ParticlesBackground from "../src/components/ParticlesBackground.tsx/ParticlesBackground";
import Compass from "../src/components/Compass/Compass";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aldo César Gutiérrez Gutiérrez</title>
        <meta name="description" content="Online portfolio and CV" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#e2e8f0" />
        <meta name="robots" content="noindex" />
        <link
          href="https://fonts.googleapis.com/css2?Montserrat:wght@100;400;500;800&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="absolute flex flex-1 w-full h-full">
        <ParticlesBackground />
        <Compass />
      </div>

      <div className="flex flex-col flex-1 z-10">
        <div className="flex justify-end w-full top-0 p-5">
          <div className="flex flex-row p-2 rounded-md bg-slate-100 items-center justify-center gap-2 cursor-pointer hover:bg-slate-500 hover:text-white">
            <div>
              <img src="/static/flags/us.svg" width={20}></img>
            </div>
            <div className="flex text-xs gap-2">
              EN
              <FontAwesomeIcon
                icon={faSortDown}
                style={{ position: "relative", width: 15, height: 15, top: -3 }}
              />
            </div>
          </div>
        </div>
        <Component {...pageProps} />
        <div
          className="flex flex-col gap-4 w-full items-center justify-center p-4 h-[200px]"
          style={{ bottom: 40 }}
        >
          <div className="flex gap-4 text-slate-600 ">
            <a
              href="https://github.com/zerozelta"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: 30, height: 30 }}
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/aldo-cesar/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ width: 30, height: 30 }}
              ></FontAwesomeIcon>
            </a>
            {/**
            <Link href={"/contact"}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: 30, height: 30 }}
              ></FontAwesomeIcon>
            </Link>
             */}
          </div>
        </div>
      </div>
    </>
  );
}
