import { mount } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { scenarioNumberImages } from "./assets";

import { CampaignScenarioInfoWindow, CampaignScenarioInfoWindowProps } from "./CampaignScenarioInfoWindow";

describe("CampaignScenarioInfoWindow", () => {
  const defaultProps: CampaignScenarioInfoWindowProps = {
    scenarioDescription: "",
    scenarioName: "",
    scenarioNumber: 1,
    visible: true,
  };

  it("should render scenario number", () => {
    const props: CampaignScenarioInfoWindowProps = {
      ...defaultProps,
      scenarioNumber: 2,
    };

    const wrapper = mount(<CampaignScenarioInfoWindow {...props} />);

    const scenarioNumber = wrapper.find(byTestId("scenario-number")).find(HTMLImageElement);

    expect(scenarioNumber.props().src).toBe(scenarioNumberImages[2]);
  });

  it("should render scenario name", () => {
    const props: CampaignScenarioInfoWindowProps = {
      ...defaultProps,
      scenarioName: "name",
    };

    const wrapper = mount(<CampaignScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("scenario-name")).text()).toBe("name");
  });

  it("should render scenario description", () => {
    const props: CampaignScenarioInfoWindowProps = {
      ...defaultProps,
      scenarioDescription: "description",
    };

    const wrapper = mount(<CampaignScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("scenario-description")).text()).toBe("description");
  });

  it("should handle okay click", () => {
    const props: CampaignScenarioInfoWindowProps = {
      ...defaultProps,
      onOkayClick: jest.fn(),
    };

    const wrapper = mount(<CampaignScenarioInfoWindow {...props} />);

    const control = wrapper.find(byTestId("okay"));

    control.simulate("click");

    expect(props.onOkayClick).toHaveBeenCalled();
  });

  it("should handle restart scenario click", () => {
    const props: CampaignScenarioInfoWindowProps = {
      ...defaultProps,
      onRestartScenarioClick: jest.fn(),
    };

    const wrapper = mount(<CampaignScenarioInfoWindow {...props} />);

    const control = wrapper.find(byTestId("restart-scenario"));

    control.simulate("click");

    expect(props.onRestartScenarioClick).toHaveBeenCalled();
  });
});
