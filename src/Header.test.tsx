import { getByTestId, render } from "@testing-library/react";
import moment from "moment";
import Header from "./components/Header";

describe(Header, () => {
  it('should display the time', () => {
    const component = render(<Header></Header>);
    const time = moment().format('H:mm');
    const clockValue = component.getByTestId('clock').innerHTML;

    expect(time).toEqual(clockValue);
  })

  it('should load the logo', () => {
    const component = render(<Header></Header>);
    const logo = component.getByRole('img');
    expect(logo).toHaveAttribute('src', '/virta.svg');
    expect(logo).toHaveAttribute('alt', 'Virta');
  })
})
