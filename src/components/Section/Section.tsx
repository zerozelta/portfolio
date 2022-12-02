import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SectionPorps = {
  id: string;
  icon?: IconProp;
  title: string;
  children: React.ReactNode;
};
const Section = ({ children, title, icon, id }: SectionPorps) => {
  return (
    <div className="flex w-full flex-col gap-2" id={id}>
      <h1 className="flex gap-2 text-lg text-blue-500 items-center">
        {icon && (
          <FontAwesomeIcon icon={icon} style={{ width: 15, height: 15 }} />
        )}
        <div className="">{title}</div>
      </h1>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default Section;
