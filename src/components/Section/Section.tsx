import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SectionPorps = {
  icon?: IconProp;
  title: string;
  children: React.ReactNode;
};
const Section = ({ children, title, icon }: SectionPorps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="flex gap-2 text-lg text-blue-500 items-center">
        {icon && (
          <FontAwesomeIcon icon={icon} style={{ width: 15, height: 15 }} />
        )}
        <div className="">{title}</div>
      </h1>
      <p>{children}</p>
    </div>
  );
};

export default Section;
