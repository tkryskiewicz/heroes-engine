import { Army } from "./Army";
import { Hero } from "./Hero";

export interface Town {
  id: string;
  alignment: string;
  heroClass: string;
  garrison: Army;
  visitingHero?: Hero;
}
