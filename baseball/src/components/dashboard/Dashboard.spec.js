import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Display />", () => {
  it("displays strike button", () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("strike-btn")).toBeInTheDocument();
  });
  it("displays ball button", () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("ball-btn")).toBeInTheDocument();
  });
  it("displays foul button", () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("foul-btn")).toBeInTheDocument();
  });
  it("displays hit button", () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("hit-btn")).toBeInTheDocument();
  });
});
describe('<Display />', () => {
    it('displays strikes', ()=> {
        const { getByText } = render (<Dashboard />)
        expect(getByText(/strikes/i)).toBeInTheDocument()
    })
    it('displays balls', ()=> {
        const { getByText } = render (<Dashboard />)
        expect(getByText(/balls/i)).toBeInTheDocument()
    })
})


describe("Add Ball", () => {
  const { getByTestId, getByText } = render(<Dashboard />);
  const selected = getByTestId("balls");
  const button = getByTestId("ball-btn");
  it("Increments ball count", () => {
    fireEvent.click(button);
    expect(selected).toHaveTextContent(/Balls: 1/i);
    fireEvent.click(button);
    expect(selected).toHaveTextContent(/Balls: 2/i);
    fireEvent.click(button);
    expect(selected).toHaveTextContent(/Balls: 3/i);
    fireEvent.click(button);
    expect(selected).toHaveTextContent(/Balls: 0/i);
  });
});

describe("Add strike", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const selected = getByTestId("strikes");
    const button = getByTestId("strike-btn");
    it("Increments strike count", () => {
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 1/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 2/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 0/i);
    });
    it("Increments strike by 1 on foul unless strikes ===2", () => {
        fireEvent.click(button);
        expect(selected).toHaveTextContent(/Strikes: 1/i);
        fireEvent.click(button);
        expect(selected).toHaveTextContent(/Strikes: 2/i);
        fireEvent.click(button);
        expect(selected).toHaveTextContent(/Strikes: 0/i);
      });
  });

  describe('add foul', () => {
    it("Increments strike by 1 on foul unless strikes ===2", () => {
        const { getByTestId } = render(<Dashboard />)
        const button = getByTestId('foul-btn')
        const selected = getByTestId('strikes')
        fireEvent.click(button);
        expect(selected).toHaveTextContent(/Strikes: 1/i);
        fireEvent.click(button);
        expect(selected).toHaveTextContent(/Strikes: 2/i);
        fireEvent.click(button);
        expect(selected).toHaveTextContent(/Strikes: 2/i);
      });
  })
  
