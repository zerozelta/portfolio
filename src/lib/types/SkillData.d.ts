export type SkillGroup = {
  title: string;
  data: SkillItem[];
}[];

export type SkillItem = {
  name: string;
  url: string;
  level: number;
  years: number;
};
