import { SkillId } from "heroes-homm1";

import attack = require("./attack.jpg");
import defense = require("./defense.jpg");
import knowledge = require("./knowledge.jpg");
import spellPower = require("./spell-power.jpg");

export const skill: { readonly [i: string]: string } = {
  [SkillId.Attack]: attack,
  [SkillId.Defense]: defense,
  [SkillId.Knowledge]: knowledge,
  [SkillId.SpellPower]: spellPower,
};
