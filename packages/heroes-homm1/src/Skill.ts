export enum Skill {
  // TODO: rename to just "attack" to align with creature stats?
  AttackSkill = "attack-skill",
  DefenseSkill = "defense-skill",
  SpellPower = "spell-power",
  Knowledge = "knowledge",
}

export const SkillIds: Skill[] = [
  Skill.AttackSkill,
  Skill.DefenseSkill,
  Skill.SpellPower,
  Skill.Knowledge,
];
