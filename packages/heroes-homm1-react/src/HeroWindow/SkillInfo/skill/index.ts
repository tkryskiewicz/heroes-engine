import { Skill } from "heroes-homm1";

import AttackSkillImage = require("./attack-skill.jpg");
import DefenseSkillImage = require("./defense-skill.jpg");
import KnowledgeImage = require("./knowledge.jpg");
import SpellPowerImage = require("./spell-power.jpg");

export const skillImages: { [index: string]: string } = {
  [Skill.AttackSkill]: AttackSkillImage,
  [Skill.DefenseSkill]: DefenseSkillImage,
  [Skill.Knowledge]: KnowledgeImage,
  [Skill.SpellPower]: SpellPowerImage,
};
