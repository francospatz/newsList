import React from "react";
import { shallow } from "enzyme";
import CardNew from "./CardNew";

describe("CardNew", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardNew />);
    expect(wrapper).toMatchSnapshot();
  });
});
