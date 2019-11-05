import React from "react";

import { MovementSpeed, SoundVolume } from "heroes-homm1";
import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { movementSpeed } from "./assets";

import { ImageSwitch } from "../base";
import { GameOptionsWindow, GameOptionsWindowProps } from "./GameOptionsWindow";

describe("GameOptionsWindow", () => {
  it("should handle new game click", () => {
    const props: GameOptionsWindowProps = {
      onNewGameClick: jest.fn(),
      visible: true,
    };

    const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("new-game"));

    control.simulate("click");

    expect(props.onNewGameClick).toHaveBeenCalled();
  });

  it("should handle load game click", () => {
    const props: GameOptionsWindowProps = {
      onLoadGameClick: jest.fn(),
      visible: true,
    };

    const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("load-game"));

    control.simulate("click");

    expect(props.onLoadGameClick).toHaveBeenCalled();
  });

  it("should handle save game click", () => {
    const props: GameOptionsWindowProps = {
      onSaveGameClick: jest.fn(),
      visible: true,
    };

    const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("save-game"));

    control.simulate("click");

    expect(props.onSaveGameClick).toHaveBeenCalled();
  });

  it("should handle quit click", () => {
    const props: GameOptionsWindowProps = {
      onQuitClick: jest.fn(),
      visible: true,
    };

    const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("quit"));

    control.simulate("click");

    expect(props.onQuitClick).toHaveBeenCalled();
  });

  describe("music volume", () => {
    it("should be off by default", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("music-volume")).find(ImageSwitch);

      expect(control.props().checked).toBe(false);
      expect(wrapper.find(byTestId("music-volume-container")).find(byTestId("on-off")).text()).toBe("Off");
    });

    it("should be on when enabled", () => {
      const props: GameOptionsWindowProps = {
        musicVolume: SoundVolume.Volume1,
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("music-volume")).find(ImageSwitch);

      expect(control.props().checked).toBe(true);
      expect(wrapper.find(byTestId("music-volume-container")).find(byTestId("on-off")).text()).toBe("On");
    });

    it("should not render volume when off", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      expect(wrapper.find(byTestId("music-volume-container")).find(byTestId("volume")).exists()).toBe(false);
    });

    it("should render volume when enabled", () => {
        const props: GameOptionsWindowProps = {
          musicVolume: SoundVolume.Volume1,
          visible: true,
        };

        const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

        expect(wrapper.find(byTestId("music-volume-container")).find(byTestId("volume")).text()).toBe("Volume 1");
    });

    it("should not render volume when on", () => {
        const props: GameOptionsWindowProps = {
          musicVolume: SoundVolume.On,
          visible: true,
        };

        const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

        expect(wrapper.find(byTestId("music-volume-container")).find(byTestId("volume")).exists()).toBe(false);
    });

    it("should handle change", () => {
      const props: GameOptionsWindowProps = {
        onMusicVolumeChange: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("music-volume"));

      control.simulate("click");

      expect(props.onMusicVolumeChange).toHaveBeenCalledWith(SoundVolume.On);
    });
  });

  describe("effects volume", () => {
    it("should be off by default", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("effects-volume")).find(ImageSwitch);

      expect(control.props().checked).toBe(false);
      expect(wrapper.find(byTestId("effects-volume-container")).find(byTestId("on-off")).text()).toBe("Off");
    });

    it("should be on when enabled", () => {
      const props: GameOptionsWindowProps = {
        effectsVolume: SoundVolume.Volume1,
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("effects-volume")).find(ImageSwitch);

      expect(control.props().checked).toBe(true);
      expect(wrapper.find(byTestId("effects-volume-container")).find(byTestId("on-off")).text()).toBe("On");
    });

    it("should not render volume when off", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      expect(wrapper.find(byTestId("effects-volume-container")).find(byTestId("volume")).exists()).toBe(false);
    });

    it("should render volume when enabled", () => {
        const props: GameOptionsWindowProps = {
          effectsVolume: SoundVolume.Volume1,
          visible: true,
        };

        const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

        expect(wrapper.find(byTestId("effects-volume-container")).find(byTestId("volume")).text()).toBe("Volume 1");
    });

    it("should not render volume when on", () => {
        const props: GameOptionsWindowProps = {
          effectsVolume: SoundVolume.On,
          visible: true,
        };

        const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

        expect(wrapper.find(byTestId("effects-volume-container")).find(byTestId("volume")).exists()).toBe(false);
    });

    it("should handle change", () => {
      const props: GameOptionsWindowProps = {
        onEffectsVolumeChange: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("effects-volume"));

      control.simulate("click");

      expect(props.onEffectsVolumeChange).toHaveBeenCalledWith(SoundVolume.On);
    });
  });

  describe("movement speed", () => {
    it("should be walk by default", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("movement-speed"));

      expect(control.props().src).toBe(movementSpeed.walk);
      expect(wrapper.find(byTestId("movement-speed-container")).find(byTestId("value")).text()).toBe("Walk");
    });

    it("should be trot when set", () => {
      const props: GameOptionsWindowProps = {
        movementSpeed: MovementSpeed.Trot,
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("movement-speed")).find(HTMLImageElement);

      expect(control.props().src).toBe(movementSpeed.trot);
      expect(wrapper.find(byTestId("movement-speed-container")).find(byTestId("value")).text()).toBe("Trot");
    });

    it("should handle change", () => {
      const props: GameOptionsWindowProps = {
        onMovementSpeedChange: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("movement-speed"));

      control.simulate("click");

      expect(props.onMovementSpeedChange).toBeCalledWith(MovementSpeed.Trot);
    });
  });

  describe("auto save", () => {
    it("should be off by default", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("auto-save")).find(ImageSwitch);

      expect(control.props().checked).toBe(false);
      expect(wrapper.find(byTestId("auto-save-container")).find(byTestId("on-off")).text()).toBe("Off");
    });

    it("should be on when set", () => {
      const props: GameOptionsWindowProps = {
        autoSave: true,
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("auto-save")).find(ImageSwitch);

      expect(control.props().checked).toBe(true);
      expect(wrapper.find(byTestId("auto-save-container")).find(byTestId("on-off")).text()).toBe("On");
    });

    it("should handle change", () => {
      const props: GameOptionsWindowProps = {
        onAutoSaveChange: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("auto-save"));

      control.simulate("click");

      expect(props.onAutoSaveChange).toBeCalledWith(true);
    });
  });

  describe("show path", () => {
    it("should be off by default", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("show-path")).find(ImageSwitch);

      expect(control.props().checked).toBe(false);
      expect(wrapper.find(byTestId("show-path-container")).find(byTestId("on-off")).text()).toBe("Off");
    });

    it("should be on when set", () => {
      const props: GameOptionsWindowProps = {
        showPath: true,
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("show-path")).find(ImageSwitch);

      expect(control.props().checked).toBe(true);
      expect(wrapper.find(byTestId("show-path-container")).find(byTestId("on-off")).text()).toBe("On");
    });

    it("should handle change", () => {
      const props: GameOptionsWindowProps = {
        onShowPathChange: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("show-path"));

      control.simulate("click");

      expect(props.onShowPathChange).toBeCalledWith(true);
    });
  });

  describe("view enemy movement", () => {
    it("should be off by default", () => {
      const props: GameOptionsWindowProps = {
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("view-enemy-movement")).find(ImageSwitch);

      expect(control.props().checked).toBe(false);
      expect(wrapper.find(byTestId("view-enemy-movement-container")).find(byTestId("on-off")).text()).toBe("Off");
    });

    it("should be on when set", () => {
      const props: GameOptionsWindowProps = {
        viewEnemyMovement: true,
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("view-enemy-movement")).find(ImageSwitch);

      expect(control.props().checked).toBe(true);
      expect(wrapper.find(byTestId("view-enemy-movement-container")).find(byTestId("on-off")).text()).toBe("On");
    });

    it("should handle change", () => {
      const props: GameOptionsWindowProps = {
        onViewEnemyMovementChange: jest.fn(),
        visible: true,
      };

      const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

      const control = wrapper.find(byTestId("view-enemy-movement"));

      control.simulate("click");

      expect(props.onViewEnemyMovementChange).toBeCalledWith(true);
    });
  });

  it("should handle okay click", () => {
    const props: GameOptionsWindowProps = {
      onOkayClick: jest.fn(),
      visible: true,
    };

    const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("okay"));

    control.simulate("click");

    expect(props.onOkayClick).toHaveBeenCalled();
  });

  it("should handle cancel info click", () => {
    const props: GameOptionsWindowProps = {
      onInfoClick: jest.fn(),
      visible: true,
    };

    const wrapper = mountWithIntl(<GameOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("info"));

    control.simulate("click");

    expect(props.onInfoClick).toHaveBeenCalled();
  });
});
