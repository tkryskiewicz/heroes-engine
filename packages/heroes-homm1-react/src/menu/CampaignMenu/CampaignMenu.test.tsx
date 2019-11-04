import { shallow } from "enzyme";
import React from "react";

import { CampaignId } from "heroes-homm1";
import { byTestId } from "heroes-test-helpers";

import { ImageButton } from "../../base";
import { CampaignMenu, CampaignMenuProps } from "./CampaignMenu";

describe("CampaignMenu", () => {
  it("should handle play lord ironfist click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const playLordIronfistButton = wrapper.find(byTestId("play-lord-ironfist")).find(ImageButton);

    playLordIronfistButton.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.LordIronfist);
  });

  it("should handle play lord slayer click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const playLordSlayerButton = wrapper.find(byTestId("play-lord-slayer")).find(ImageButton);

    playLordSlayerButton.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.LordSlayer);
  });

  it("should handle play lady lamanda click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const playQueenLamandaButton = wrapper.find(byTestId("play-queen-lamanda")).find(ImageButton);

    playQueenLamandaButton.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.QueenLamanda);
  });

  it("should handle play lord alamar click", () => {
    const props: CampaignMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const playLordAlamar = wrapper.find(byTestId("play-lord-alamar")).find(ImageButton);

    playLordAlamar.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(CampaignId.LordAlamar);
  });

  it("should handle cancel click", () => {
    const props: CampaignMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<CampaignMenu {...props} />);

    const cancelButton = wrapper.find(byTestId("cancel")).find(ImageButton);

    cancelButton.props().onClick();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
