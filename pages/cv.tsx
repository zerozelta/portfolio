import {
  faBookBookmark,
  faLanguage,
  faStar,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import RoundedButton from "../src/components/Button/RoundedButton";
import Experience from "../src/components/Experience/Experience";
import Section from "../src/components/Section/Section";
import Skill from "../src/components/Skill/Skill";
import { SkillGroup } from "../src/lib/types/SkillData";
import { fetchJSON } from "../src/lib/Utils";
import "react-vertical-timeline-component/style.min.css";

export default function Home() {
  const [skills, setSkills] = useState<SkillGroup>();

  useEffect(() => {
    fetchJSON("/static/data/skills.json").then((data) => {
      console.log(data);
      setSkills(data);
    });
  }, []);

  return (
    <div className="flex w-full h-full flex-1 text-sm sm:text-lg">
      <div className="flex flex-col gap-2 p-2">
        <div className="sticky top-2 flex flex-col gap-2 text-blue-500">
          <RoundedButton dark size={40} href="#myself">
            <FontAwesomeIcon icon={faUser} style={{ width: 22, height: 22 }} />
          </RoundedButton>
          <RoundedButton dark size={40} href="#skills">
            <FontAwesomeIcon icon={faStar} style={{ width: 22, height: 22 }} />
          </RoundedButton>
          <RoundedButton dark size={40} href="#achievements">
            <FontAwesomeIcon
              icon={faTrophy}
              style={{ width: 22, height: 22 }}
            />
          </RoundedButton>
          <RoundedButton dark size={40} href="#experience">
            <FontAwesomeIcon
              icon={faBookBookmark}
              style={{ width: 22, height: 22 }}
            />
          </RoundedButton>
          <RoundedButton dark size={40} href="#languages">
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ width: 22, height: 22 }}
            />
          </RoundedButton>
        </div>
      </div>

      <div className="flex flex-col items-center w-full h-full flex-1 m-auto max-w-[680px] gap-10 p-2" id="myself">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <div>
            Aldo César Gutiérrez Gtz.
            <br />
            <strong>(zerozelta)</strong>
          </div>

          <div className="flex p-2 rounded-full overflow-hidden bg-white border-4 border-slate-100 w-fit">
            <img
              src="/static/img/photo.webp"
              className="w-[125px] h-[125px] rounded-full"
            />
          </div>
          <div className="flex flex-row items-center justify-center font-bold text-blue-500 gap-2">
            <img src="/static/flags/mx.svg" height={22} width={22}></img>
            <div>FullStack Developer</div>
          </div>

          <div className="block w-full rounded-lg text-justify">
            <strong>Software developer Engineer</strong> by the Polytechnic
            University of Aguascalientes. Self-taught and programing
            enthusiastic since I was 13 years old. with experience mainly in
            <strong>software design </strong> and
            <strong>web development technologies</strong>.
          </div>

          <div className="flex flex-row justify-start w-full gap-1">
            <div className="rounded-md py-2 px-2 bg-slate-500 text-white text-xs w-fit whitespace-nowrap">
              Self-taught
            </div>
            <div className="rounded-md py-2 px-2 bg-slate-500 text-white text-xs w-fit whitespace-nowrap">
              Leadership
            </div>
            <div className="rounded-md py-2 px-2 bg-slate-500 text-white text-xs w-fit whitespace-nowrap">
              Creative
            </div>
          </div>
        </div>

        <Section title="Skills & Technologies" icon={faStar} id="skills">
          {skills &&
            skills.map((group, index) => {
              return (
                <div key={index}>
                  <div className="text-sm font-bold py-2">{group.title}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                    {group.data &&
                      group.data.map((skillItem, index) => {
                        return <Skill key={index} item={skillItem} />;
                      })}
                  </div>
                </div>
              );
            })}
        </Section>

        <Section title="Achievements" id="achievements" icon={faTrophy}>
          <div className="flex flex-row gap-3 sm:items-center items-start justify-center">
            <div>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ width: 25, height: 25 }}
              />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="font-bold">
                4th Place international homebrew showcase for PSP
              </div>
              <div>
                <p>
                  I was participate in an international homebrew showcase for
                  the console Play Station Portable Scenery Beta 2011 tournament
                  with the
                  <a
                    href="https://psp.scenebeta.com/noticia/fishell"
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    {" "}
                    Project Fishell
                  </a>
                </p>
                <div className=" font-light text-xs">2011</div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 sm:items-center items-start justify-center">
            <div>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ width: 25, height: 25 }}
              />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="font-bold">Outstanding results in EGEL test</div>
              <div>
                <p>
                  Recognition for outstanding results in graduation exam EGEL
                  about Software Engineering.{" "}
                  <a
                    href="/static/img/egel.jpg"
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    (see results)
                  </a>
                </p>
                <div className=" font-light text-xs">2018</div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Work experience" id="experience" icon={faBookBookmark}>
          <Experience />
        </Section>

        <Section title="Languages" id="languages" icon={faLanguage}>
          <div>Spanish (Native)</div>
          <div>English (B1 TOEFL 580pts)</div>
        </Section>
      </div>
    </div>
  );
}
