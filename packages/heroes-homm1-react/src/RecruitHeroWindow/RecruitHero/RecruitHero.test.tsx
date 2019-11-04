import React from "react";

import { HeroClass, HeroId } from "heroes-homm1";
import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { HeroPortrait, ImageButton } from "../../base";
import { RecruitHero, RecruitHeroProps } from "./RecruitHero";

describe("RecruitHero", () => {
  const defaultProps: RecruitHeroProps = {
    heroClass: HeroClass.Knight,
    heroId: HeroId.LordKilburn,
  };

  it("should render portrait", () => {
    const props: RecruitHeroProps = {
      ...defaultProps,
      heroId: HeroId.Ariel,
    };

    const wrapper = mountWithIntl(<RecruitHero {...props} />);

    const portrait = wrapper.find(byTestId("portrait")).find(HeroPortrait);

    expect(portrait.props().hero).toBe(HeroId.Ariel);
  });

  it("should render hero class", () => {
    const props: RecruitHeroProps = {
      ...defaultProps,
      heroClass: HeroClass.Sorceress,
    };

    const wrapper = mountWithIntl(<RecruitHero {...props} />);

    expect(wrapper.find(byTestId("hero-class")).text()).toBe("Sorceress");
  });

  it("should handle portrait click", () => {
    const props: RecruitHeroProps = {
      ...defaultProps,
      heroId: HeroId.Maximus,
      onPortraitClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitHero {...props} />);

    const control = wrapper.find(byTestId("portrait")).find(HeroPortrait);

    control.props().onClick();

    expect(props.onPortraitClick).toHaveBeenCalledWith(HeroId.Maximus);
  });

  it("should handle recruit click", () => {
    const props: RecruitHeroProps = {
      ...defaultProps,
      heroId: HeroId.Barok,
      onRecruitClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitHero {...props} />);

    const control = wrapper.find(byTestId("recruit")).find(ImageButton);

    control.props().onClick();

    expect(props.onRecruitClick).toHaveBeenCalledWith(HeroId.Barok);
  });
});