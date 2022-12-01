import { SkillItem } from "../../lib/types/SkillData";

const LEVELS: any = {
  1: "Basic",
  2: "Intermediate",
  3: "Advanced",
  4: "Expert",
};

type SkillPorps = {
  item: SkillItem;
};

const Skill = ({ item }: SkillPorps) => {
  return (
    <div className="flex gap-3">
      <img src={item.url} className="w-[40px] h-[40px]" />
      <div>
        <div className="font-bold">{item.name}</div>
        <div className="flex text-xs gap-2">
          <div>({LEVELS[item.level]})</div>
          <div>·</div>
          <div>{item.years}+ years</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
