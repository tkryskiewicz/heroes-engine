import React from "react";

import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { GameInputNumber, ImageButton, ResourceCost } from "../base";
import { RecruitTroopWindow, RecruitTroopWindowProps } from "./RecruitTroopWindow";

describe("RecruitTroopWindow", () => {
  const defaultProps: RecruitTroopWindowProps = {
    availableCount: 0,
    cost: {},
    count: 0,
    title: "",
    visible: true,
  };

  it("should render title", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      title: "title",
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    expect(wrapper.find(byTestId("title")).text()).toBe("title");
  });

  it("should render creature", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      renderCreature: () => "creature",
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    expect(wrapper.find(byTestId("creature")).text()).toBe("creature");
  });

  it("should render available count", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      availableCount: 1,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    expect(wrapper.find(byTestId("available-count")).text()).toBe("Available: 1");
  });

  it("should render cost", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      cost: {
        resource: 1,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("cost")).find(ResourceCost);

    expect(control.props().value).toEqual({
      resource: 1,
    });
  });

  it("should render count", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      count: 1,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("count")).find(GameInputNumber);

    expect(control.props().value).toBe(1);
  });

  it("should limit count to available count", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      availableCount: 1,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("count")).find(GameInputNumber);

    expect(control.props().max).toBe(1);
  });

  it("should not disable count by default", () => {
    const wrapper = mountWithIntl(<RecruitTroopWindow {...defaultProps} />);

    const control = wrapper.find(byTestId("count")).find(GameInputNumber);

    expect(control.props().disabled).toBe(false);
  });

  it("should handle count change", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      count: 0,
      onCountChange: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("count")).find(GameInputNumber);

    control.props().onChange(1);

    expect(props.onCountChange).toHaveBeenCalledWith(1);
  });

  it("should handle increment click", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      onIncrementClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("increment"));

    control.simulate("click");

    expect(props.onIncrementClick).toHaveBeenCalled();
  });

  it("should handle decrement click", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      onDecrementClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("decrement"));

    control.simulate("click");

    expect(props.onDecrementClick).toHaveBeenCalled();
  });

  it("should handle max click", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      onMaxClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("max"));

    control.simulate("click");

    expect(props.onMaxClick).toHaveBeenCalled();
  });

  it("should render total cost", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      cost: {
        resource: 1,
      },
      count: 2,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("total-cost")).find(ResourceCost);

    expect(control.props().value).toEqual({
      resource: 2,
    });
  });

  it("should not disable okay by default", () => {
    const wrapper = mountWithIntl(<RecruitTroopWindow {...defaultProps} />);

    const control = wrapper.find(byTestId("okay")).find(ImageButton);

    expect(control.props().disabled).toBe(false);
  });

  it("should disable okay when set", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      okayDisabled: true,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("okay")).find(ImageButton);

    expect(control.props().disabled).toBe(true);
  });

  it("should handle okay click", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      onOkayClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("okay"));

    control.simulate("click");

    expect(props.onOkayClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: RecruitTroopWindowProps = {
      ...defaultProps,
      onCancelClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindow {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
