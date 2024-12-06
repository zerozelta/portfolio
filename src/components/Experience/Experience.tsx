import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "./Tag";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type ExperienceProps = {};

const Experience = ({ }: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-9 relative">

      <div className="flex gap-2">
        <div className="flex flex-col gap-2 items-center">
          <img
            src="/static/img/companies/wizeline.png"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <img
            src="/static/img/companies/synchrony.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="leading-6">
            <div className="font-bold">Senior Front-end Developer</div>
            <div className="flex items-center gap-2">Wizeline <span><a href="https://www.wizeline.com/" className="flex gap-1 text-xs text-blue-500" target={"_blank"} rel="noreferrer">website<FontAwesomeIcon icon={faLink} style={{ width: 10 }} /></a></span></div>
            <div className="text-xs font-light">2023</div>
          </div>
          <div className="text-sm">
            Frontend Developer at <a href="https://www.synchrony.com/" className="text-blue-500" target={"_blank"} rel="noreferrer">Synchrony Financial</a>, I specialized in building and supporting authentication systems using React, with a strong emphasis on security, scalability, and performance
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Git</Tag>
            <Tag>NextJS</Tag>
            <Tag>Redux</Tag>
            <Tag>Styled Comp.</Tag>
            <Tag>Jest</Tag>
            <Tag>Scrum</Tag>
            <Tag>Jira</Tag>
            <Tag>Jenkings</Tag>
            <Tag>A11y</Tag>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-2 items-center">
          <img
            src="/static/img/companies/persistent.png"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <img
            src="/static/img/companies/rsi.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="leading-6">
            <div className="font-bold">Senior Front-end Developer</div>
            <div className="flex items-center gap-2">Persistent Systems <span><a href="https://persistent.com" className="flex gap-1 text-xs text-blue-500" target={"_blank"} rel="noreferrer">website<FontAwesomeIcon icon={faLink} style={{ width: 10 }} /></a></span></div>
            <div className="text-xs font-light">2022-2023</div>
          </div>
          <div className="text-sm">
            Front-end development for a SaaS platform to handle workstreams and customer resources for the <a href="https://www.rsidelivers.com/" className="text-blue-500" target={"_blank"} rel="noreferrer">Revenue Solution Inc (RSI)</a>.
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>React</Tag>
            <Tag>GraphQL</Tag>
            <Tag>JavaScript</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Git</Tag>
            <Tag>Jira</Tag>
            <Tag>Jest</Tag>
            <Tag>Scrum</Tag>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-2 items-center">
          <img
            src="/static/img/companies/epam.png"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <img
            src="/static/img/companies/walgreens.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="leading-6">
            <div className="font-bold">Front-end Developer</div>
            <div className="flex items-center gap-2">EPAM Systems <span><a href="https://www.epam.com/" className="flex gap-1 text-xs text-blue-500" target={"_blank"} rel="noreferrer">website<FontAwesomeIcon icon={faLink} style={{ width: 10 }} /></a></span></div>
            <div className="text-xs font-light">2022 - 2022</div>
          </div>
          <div className="text-sm">
            Development of UI and UX web component library for the <a href="https://www.walgreens.com/" className="text-blue-500" target={"_blank"} rel="noreferrer">Walgreen
              Company</a> with accessibility support (a11y) made in React.
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>React</Tag>
            <Tag>SCSS</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Git</Tag>
            <Tag>Jira</Tag>
            <Tag>Jest</Tag>
            <Tag>Scrum</Tag>
            <Tag>A11y</Tag>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex">
          <img
            src="/static/img/companies/scefira.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="leading-6">
            <div className="font-bold">Senior FullStack developer</div>
            <div className="flex items-center gap-2">Scefira Technologies <span><a href="https://www.scefira.com/" className="flex gap-1 text-xs text-blue-500" target={"_blank"} rel="noreferrer">website<FontAwesomeIcon icon={faLink} style={{ width: 10 }} /></a></span></div>
            <div className="text-xs font-light">2018 - 2022</div>
          </div>
          <div className="text-sm">
            Development and management of front-end, backend and fullstack project based on web technologies at <a className="text-blue-500" href="https://scefira.com" target={"_blank"} rel="noreferrer">
              scefira.com
            </a>
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>React</Tag>
            <Tag>GraphQL</Tag>
            <Tag>Java</Tag>
            <Tag>Git</Tag>
            <Tag>NextJS</Tag>
            <Tag>MobX</Tag>
            <Tag>Redux</Tag>
            <Tag>MySQL</Tag>
            <Tag>PostgreSQL</Tag>
            <Tag>TypeScript</Tag>
            <Tag>NodeJS</Tag>
            <Tag>HTML5</Tag>
            <Tag>Stripe API</Tag>
            <Tag>GoogleMaps API</Tag>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex">
          <img
            src="/static/img/companies/irelox.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="leading-6">
            <div className="font-bold">FullStack developer</div>
            <div>Ilauto S.A. de C.V</div>
            <div className="text-xs font-light">2017 - 2018</div>
          </div>
          <div className="text-sm">
            Analysis of requirements, design and development of{" "}
            <a
              className="text-blue-500"
              href="https://obraplaza.com.mx"
              target={"_blank"}
              rel="noreferrer"
            >
              obraplaza.com.mx
            </a>
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>PHP</Tag>
            <Tag>MySQL</Tag>
            <Tag>ExtremePrograming</Tag>
            <Tag>JavaScript</Tag>
            <Tag>HTML5</Tag>
            <Tag>CSS</Tag>
            <Tag>OpenPay API</Tag>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex">
          <img
            src="/static/img/companies/rainde.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="leading-6">
            <div className="font-bold">FullStack developer</div>
            <div className="flex items-center gap-2">Rainde S.A. de C.V.<span><a href="https://www.rainde.net/" className="flex gap-1 text-xs text-blue-500" target={"_blank"} rel="noreferrer">website<FontAwesomeIcon icon={faLink} style={{ width: 10 }} /></a></span></div>
            <div className="text-xs font-light">2016 - 2017</div>
          </div>
          <div className="text-sm">
            Development of a vehicle and terrain visualization module with the
            Google Maps API for an ERP.
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>HTML</Tag>
            <Tag>JavaScript</Tag>
            <Tag>CSS</Tag>
            <Tag>ASP</Tag>
            <Tag>.NET</Tag>
            <Tag>SQLServer</Tag>
            <Tag>GoogleMaps API</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
