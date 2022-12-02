import Tag from "./Tag";

type ExperienceProps = {};

const Experience = ({}: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-5 relative">
      <div className="flex gap-2">
        <div className="flex">
          <img
            src="/static/img/companies/epam.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <div className="leading-6">
            <div className="font-bold">Front-end Developer</div>
            <div>EPAM Systems</div>
            <div className="text-xs font-light">2022</div>
          </div>
          <div className="text-sm">
            Development of UI and UX web component library for the Walgreen
            Company with accessibility support (a11y) made in ReactJS.
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>Jira</Tag>
            <Tag>Confluence</Tag>
            <Tag>Git</Tag>
            <Tag>ReactJS</Tag>
            <Tag>SCSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Jest</Tag>
            <Tag>Scrum</Tag>
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
            <div>Scefira Technologies</div>
            <div className="text-xs font-light">2018 - 2022</div>
          </div>
          <div className="text-sm">
            Development and management in some projects for Scefira
            Technologies.{" "}
            <a href="https://scefira.com" target={"_blank"} rel="noreferrer">
              scefira.com
            </a>
          </div>
          <div className="flex flex-row gap-1 flex-wrap">
            <Tag>Java</Tag>
            <Tag>Git</Tag>
            <Tag>ReactJS</Tag>
            <Tag>GraphQL</Tag>
            <Tag>NextJS</Tag>
            <Tag>MobX</Tag>
            <Tag>ReduxJS</Tag>
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
              href="https://obraplaza.com.mx"
              target={"_blank"}
              rel="noreferrer"
            >
              scefira.com
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
            <div>Rainde S.A. de C.V</div>
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
