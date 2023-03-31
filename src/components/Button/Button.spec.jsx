import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { click } from '@testing-library/user-event/dist/click';
import { Button } from '.'

describe('<Button/>', () => {
  it('whould render the button with the text', () =>{
    render(<Button/>)

    const button = screen.getByRole('button', { name: /Pages/i });
    expect(button).toBeInTheDocument()
  });


  it('Should call function on button click',() => {
    const fn = jest.fn();
    render(<Button onClick={fn}/>)

    const button = screen.getByRole('button', { name: /Pages/i });
    userEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1)
  })


  it('Should be disable or true',() => {
    render(<Button disabled={true}/>)

    const button = screen.getByRole('button', { name: /Pages/i });
    expect(button).toBeDisabled()
  })
});