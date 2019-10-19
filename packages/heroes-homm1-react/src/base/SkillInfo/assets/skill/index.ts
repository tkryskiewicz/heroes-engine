import { Skill } from "heroes-homm1";

import attack = require("./attack.jpg");
import defense = require("./defense.jpg");
import knowledge = require("./knowledge.jpg");
import spellPower = require("./spell-power.jpg");

export const skill: { readonly [i: string]: string } = {
  [Skill.Attack]: attack,
  [Skill.Defense]: defense,
  [Skill.Knowledge]: knowledge,
  [Skill.SpellPower]: spellPower,
};
