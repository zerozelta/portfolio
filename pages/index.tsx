import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faEnvelope,
  faFileLines,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full flex-1">
      <div className="flex flex-col items-center w-full sm:leading-[65px] leading-[35px] select-none">
        <div className="flex text-[40px] sm:text-[80px] font-bold ">
          ALDO CESAR
        </div>
        <div className="flex text-[22px] sm:text-[45px] font-bold">
          GUTIERREZ GUTIERREZ
        </div>
        <div className="flex text-[18px] sm:text-[30px] sm:leading-[30px] leading-[20px]">
          SOFTWARE DEVELOPER
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-10">
        <Link href={"/cv"}>
          <div className="flex flex-row gap-2 text-xl text-white rounded-md bg-slate-600 px-8 py-2 cursor-pointer items-center justify-center">
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ width: 25, height: 25 }}
            />
            <div>Open CV</div>
          </div>
        </Link>
      </div>

      <div
        className="flex flex-col gap-4 absolute w-full items-center justify-center"
        style={{ bottom: 40 }}
      >
        <div className="flex gap-4 text-slate-600 ">
          <a href="https://github.com/zerozelta" target={"_blank"}>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: 30, height: 30 }}
            ></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/aldo-cesar/" target={"_blank"}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ width: 30, height: 30 }}
            ></FontAwesomeIcon>
          </a>
          <Link href={"/contact"}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ width: 30, height: 30 }}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
