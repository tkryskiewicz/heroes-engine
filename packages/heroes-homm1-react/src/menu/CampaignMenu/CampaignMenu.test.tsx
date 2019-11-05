import { shallow } from "enzyme";
import React from "react";

import { CampaignId } from "heroes-homm1";
import { byTestId } from "heroes-test-helpers";

import { CampaignMenu, CampaignMenuProps } from "./CampaignMenu";

describe("CampaignMenu", () => {
  it("should handle play lord ironfist click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const control = wrapper.find(byTestId("play-lord-ironfist"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.LordIronfist);
  });

  it("should handle play lord slayer click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const control = wrapper.find(byTestId("play-lord-slayer"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.LordSlayer);
  });

  it("should handle play lady lamanda click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const control = wrapper.find(byTestId("play-queen-lamanda"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.QueenLamanda);
  });

  it("should handle play lord alamar click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const control = wrapper.find(byTestId("play-lord-alamar"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.LordAlamar);
  });

  it("should handle cancel click", () => {
    const props: CampaignMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
