import { fireEvent, render, wait, waitFor } from "@testing-library/react";
import { useRef } from "react";
import useListenScroll from "./useListenScroll";

describe("useListenScroll",  () => {
  test("should listen scroll of container ref", async() => {
    const callFun = jest.fn();
    const Dom = () => {
      const ref = useRef<HTMLElement>(document.body);
      useListenScroll(ref, callFun);
      return (
        <div data-testid="container" style={{ overflow: "auto" }}>
          <div style={{ height: '300vh' }}></div>
        </div>
      );
    };

    render(<Dom />);
    fireEvent.scroll(document.body,  { target: { scrollY: 100 } });
    expect(callFun).toBeCalledWith(100)
  });
});
