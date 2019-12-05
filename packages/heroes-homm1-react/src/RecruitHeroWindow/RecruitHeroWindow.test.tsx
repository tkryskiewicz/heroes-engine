import React from "react";

import { HeroClassId, HeroId } from "heroes-homm1";
import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { ResourceCost } from "../base";
import { RecruitHero } from "./RecruitHero";
import { RecruitHeroWindow, RecruitHeroWindowProps } from "./RecruitHeroWindow";

describe("RecruitHeroWindow", () => {
  const defaultProps: RecruitHeroWindowProps = {
    cost: {},
    heroes: [
        {
          heroClass: HeroClassId.Knight,
          id: HeroId.LordKilburn,
        },
        {
          heroClass: HeroClassId.Barbarian,
          id: HeroId.Thundax,
        },
    ],
  };

  describe("first hero", () => {
    it("should render hero recruitment", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        heroes: [
          {
            heroClass: HeroClassId.Knight,
            id: HeroId.LordKilburn,
          },
          defaultProps.heroes[1],
        ],
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero0")).find(RecruitHero);

      expect(control.props().heroId).toBe(HeroId.LordKilburn);
      expect(control.props().heroClass).toBe(HeroClassId.Knight);
    });

    it("should not be disabled by default", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero0")).find(RecruitHero);

      expect(control.props().disabled).toBe(false);
    });

    it("should be disabled when set", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        disabled: true,
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero0")).find(RecruitHero);

      expect(control.props().disabled).toBe(true);
    });

    it("should handle partrait click", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        heroes: [
          {
            heroClass: HeroClassId.Knight,
            id: HeroId.LordKilburn,
          },
          defaultProps.heroes[1],
        ],
        onHeroPortraitClick: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero0")).find(RecruitHero);

      control.props().onPortraitClick(HeroId.LordKilburn);

      expect(props.onHeroPortraitClick).toHaveBeenCalledWith(HeroId.LordKilburn);
    });

    it("should handle recruit click", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        heroes: [
          {
            heroClass: HeroClassId.Knight,
            id: HeroId.LordKilburn,
          },
          defaultProps.heroes[1],
        ],
        onRecruitHeroClick: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero0")).find(RecruitHero);

      control.props().onRecruitClick(HeroId.LordKilburn);

      expect(props.onRecruitHeroClick).toHaveBeenCalledWith(HeroId.LordKilburn);
    });
  });

  describe("second hero", () => {
   it("should render hero recruitment", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        heroes: [
          defaultProps.heroes[0],
          {
            heroClass: HeroClassId.Barbarian,
            id: HeroId.Thundax,
          },
        ],
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero1")).find(RecruitHero);

      expect(control.props().heroId).toBe(HeroId.Thundax);
      expect(control.props().heroClass).toBe(HeroClassId.Barbarian);
    });

   it("should not be disabled by default", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero1")).find(RecruitHero);

      expect(control.props().disabled).toBe(false);
    });

   it("should be disabled when set", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        disabled: true,
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero1")).find(RecruitHero);

      expect(control.props().disabled).toBe(true);
    });

   it("should handle partrait click", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        heroes: [
          defaultProps.heroes[0],
          {
            heroClass: HeroClassId.Barbarian,
            id: HeroId.Thundax,
          },
        ],
        onHeroPortraitClick: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero1")).find(RecruitHero);

      control.props().onPortraitClick(HeroId.Thundax);

      expect(props.onHeroPortraitClick).toHaveBeenCalledWith(HeroId.Thundax);
    });

   it("should handle recruit click", () => {
      const props: RecruitHeroWindowProps = {
        ...defaultProps,
        heroes: [
          defaultProps.heroes[0],
          {
            heroClass: HeroClassId.Barbarian,
            id: HeroId.Thundax,
          },
        ],
        onRecruitHeroClick: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

      const control = wrapper.find(byTestId("hero1")).find(RecruitHero);

      control.props().onRecruitClick(HeroId.Thundax);

      expect(props.onRecruitHeroClick).toHaveBeenCalledWith(HeroId.Thundax);
    });
  });

  it("should render cost", () => {
    const props: RecruitHeroWindowProps = {
      cost: {
        resource: 1,
      },
      heroes: [
        {
          heroClass: HeroClassId.Knight,
          id: HeroId.LordKilburn,
        },
        {
          heroClass: HeroClassId.Barbarian,
          id: HeroId.Thundax,
        },
      ],
      visible: true,
    };

    const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

    const cost = wrapper.find(ResourceCost);

    expect(cost.props().value).toEqual(props.cost);
  });

  it("should handle cancel click", () => {
    const props: RecruitHeroWindowProps = {
      cost: {},
      heroes: [
        {
          heroClass: HeroClassId.Knight,
          id: HeroId.LordKilburn,
        },
        {
          heroClass: HeroClassId.Barbarian,
          id: HeroId.Thundax,
        },
      ],
      onCancelClick: jest.fn(),
      visible: true,
    };

    const wrapper = mountWithIntl(<RecruitHeroWindow {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
