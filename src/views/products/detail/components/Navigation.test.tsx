import { fireEvent, render as rtlRender } from "@testing-library/react";
import React, { FC } from "react";
import Navigation from "./Navigation";

const render = (ui: React.ReactElement) => {
  const Wrapper: FC = (props) => {
    return <div style={{ height: "500vh" }}>{props.children}</div>;
  };
  return rtlRender(ui, { wrapper: Wrapper });
};

describe("Navigation", () => {
  it("initial render component", () => {
    const navList = [
      { name: "test1", id: "1" },
      { name: "test2", id: "2" },
    ];
    const { queryAllByText, getAllByRole, getByTestId } = render(
      <Navigation navList={navList} />
    );

    expect(queryAllByText(/test/).length).toBe(navList.length);
    expect(getByTestId("header")).toHaveStyle({
      backgroundColor: "rgba(255,255,255,0)",
    });
    getAllByRole(/icon/).forEach((icon) => {
      expect(icon).toHaveStyle({ color: "white" });
    });
  });

  it("should change styles with scroll distance", () => {
    const threshold = 100 
    const { getAllByRole, getByTestId } = render(
      <Navigation navList={[]} threshold={threshold}/>
    );

    fireEvent.scroll(document.body, {target: {scrollY: threshold / 2}})

    expect(getByTestId("header")).toHaveStyle({
      backgroundColor: "rgba(255,255,255,0.5)",
    });
    getAllByRole(/icon/).forEach((icon) => {
      expect(icon).toHaveStyle({ color: "white" });
    });

    fireEvent.scroll(document.body, {target: {scrollY: threshold}})

    expect(getByTestId("header")).toHaveStyle({
      backgroundColor: "rgba(255,255,255,1)",
    });
    getAllByRole(/icon/).forEach((icon) => {
      expect(icon).toHaveStyle({ color: "black" });
    });

    fireEvent.scroll(document.body, {target: {scrollY: threshold * 2}})

    expect(getByTestId("header")).toHaveStyle({
      backgroundColor: "rgba(255,255,255,1)",
    });
    getAllByRole(/icon/).forEach((icon) => {
      expect(icon).toHaveStyle({ color: "black" });
    });
  });
});
