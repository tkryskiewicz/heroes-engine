import { AppState, mainWindowActions, rootReducer } from "heroes-homm1-state";

import { mapDispatchToProps, mapStateToProps } from "./MainWindowContainer.connect";

describe("MainWindowContainer", () => {
  describe("mapStateToProps", () => {
    it("should map state", () => {
      const state: AppState = {
        ...rootReducer(undefined, {} as any),
        mainWindow: {
          creditsVisible: true,
        },
      };

      const result = mapStateToProps(state);

      const expected: ReturnType<typeof mapStateToProps> = {
        creditsVisible : true,
      };

      expect(result).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should map opening credits", () => {
      const dispatch = jest.fn();

      const result = mapDispatchToProps(dispatch);

      result.onOpenCreditsClick();

      expect(dispatch).toHaveBeenCalledWith(mainWindowActions.openCredits());
    });

    it("should map closing credits", () => {
      const dispatch = jest.fn();

      const result = mapDispatchToProps(dispatch);

      result.onCloseCreditsClick();

      expect(dispatch).toHaveBeenCalledWith(mainWindowActions.closeCredits());
    });
  });
});
