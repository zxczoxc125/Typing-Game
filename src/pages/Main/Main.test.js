import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

describe("[Main]", () => {
  const screen = document.createElement("div");
  let main;

  beforeEach(() => {
    main = new Main();
    main.render(screen);
  });

  afterEach(() => {
    screen.innerHTML = "";
  });

  describe("[구성요소]", () => {
    it("남은 시간, 점수, 문제 단어, 입력, 시작 버튼 영역이 존재한다.", () => {
      expect(getByTestId(screen, "remain-time")).toBeTruthy();
      expect(getByTestId(screen, "score")).toBeTruthy();
      expect(getByTestId(screen, "question")).toBeTruthy();
      expect(getByTestId(screen, "answer")).toBeTruthy();
      expect(getByTestId(screen, "start")).toBeTruthy();
    });
  });

  describe("[기능]", () => {
    describe("start 버튼을 누르면", () => {
      it("startGame 함수가 호출되고, 버튼의 텍스트가 '초기화'로 변경된다.", () => {
        const mockCall = jest.spyOn(main, "startGame");

        userEvent.click(getByTestId(screen, "start"));
        expect(mockCall).toBeCalled();
      });

      it("텍스트가 '초기화'로 변경된다.", () => {
        expect(getByTestId(screen, "start").innerHTML).toEqual("초기화");
      });
    });
  });
});