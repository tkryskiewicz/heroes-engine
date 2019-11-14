import React from "react";

import { CreatureId } from "heroes-homm1";
import { CreatureIcon, RecruitTroopWindow } from "heroes-homm1-react";
import { mountWithIntl } from "heroes-test-helpers";

import { RecruitTroopWindowContainer, RecruitTroopWindowContainerProps } from "./RecruitTroopWindowContainer";

describe("RecruitTroopWindowContainer", () => {
  const defaultProps: RecruitTroopWindowContainerProps = {
    availableCount: 0,
    cost: {
      resource: 1,
    },
    count: 0,
    creature: "",
    resources: {},
    visible: true,
  };

  it("should render title", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      creature: CreatureId.Peasant,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    expect(wrapper.find(RecruitTroopWindow).props().title).toBe("Recruit Peasant");
  });

  it("should render creature", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      creature: "creature",
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    const control = wrapper.find(CreatureIcon);

    expect(control.props().creature).toBe("creature");
  });

  it("should render cost", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      cost: {
        resource: 1,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    expect(wrapper.find(RecruitTroopWindow).props().cost).toEqual({
      resource: 1,
    });
  });

  it("should render available count", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    expect(wrapper.find(RecruitTroopWindow).props().availableCount).toBe(1);
  });

  it("should render count", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      count: 1,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    expect(wrapper.find(RecruitTroopWindow).props().count).toBe(1);
  });

  it("should handle count change", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
      cost: {
        resource: 1,
      },
      count: 0,
      onCountChange: jest.fn(),
      resources: {
        resource: 1,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onCountChange!(1);

    expect(props.onCountChange).toHaveBeenCalledWith(1);
  });

  it("should limit count by resources", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 2,
      cost: {
        resource: 1,
      },
      onCountChange: jest.fn(),
      resources: {
        resource: 1,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onCountChange!(2);

    expect(props.onCountChange).toHaveBeenCalledWith(1);
  });

  it("should handle increment click", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
      cost: {
        resource: 1,
      },
      count: 0,
      onCountChange: jest.fn(),
      resources: {
        resource: 1,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onIncrementClick!();

    expect(props.onCountChange).toHaveBeenCalledWith(1);
  });

  it("should not call change when count is available count", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
      cost: {
        resource: 1,
      },
      count: 1,
      onCountChange: jest.fn(),
      resources: {
        resource: 2,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onIncrementClick!();

    expect(props.onCountChange).not.toHaveBeenCalled();
  });

  it("should limit increment by resources", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
      cost: {
        resource: 1,
      },
      count: 0,
      onCountChange: jest.fn(),
      resources: {
        resource: 0,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onIncrementClick!();

    expect(props.onCountChange).not.toHaveBeenCalled();
  });

  it("should handle decrement click", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
      count: 1,
      onCountChange: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onDecrementClick!();

    expect(props.onCountChange).toHaveBeenCalledWith(0);
  });

  it("should not call change when count is zero", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
      count: 0,
      onCountChange: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onDecrementClick!();

    expect(props.onCountChange).not.toHaveBeenCalled();
  });

  it("should handle max click", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 2,
      cost: {
        resource: 1,
      },
      count: 0,
      onCountChange: jest.fn(),
      resources: {
        resource: 2,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onMaxClick!();

    expect(props.onCountChange).toHaveBeenCalledWith(2);
  });

  it("should limit max click by resources", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 2,
      cost: {
        resource: 1,
      },
      count: 0,
      onCountChange: jest.fn(),
      resources: {
        resource: 1,
      },
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onMaxClick!();

    expect(props.onCountChange).toHaveBeenCalledWith(1);
  });

  it("should disable okay when available count is zero", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 0,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    expect(wrapper.find(RecruitTroopWindow).props().okayDisabled).toBe(true);
  });

  it("should enable okay when available count is non-zero", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      availableCount: 1,
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    expect(wrapper.find(RecruitTroopWindow).props().okayDisabled).toBe(false);
  });

  it("should handle okay click", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      count: 1,
      onOkayClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onOkayClick!();

    expect(props.onOkayClick).toHaveBeenCalled();
  });

  it("should handle okay click when count is zero", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      count: 0,
      onCancelClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onOkayClick!();

    expect(props.onCancelClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: RecruitTroopWindowContainerProps = {
      ...defaultProps,
      onCancelClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<RecruitTroopWindowContainer {...props} />);

    wrapper.find(RecruitTroopWindow).props().onCancelClick!();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
