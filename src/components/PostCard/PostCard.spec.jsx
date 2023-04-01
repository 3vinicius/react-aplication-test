import { render, screen } from '@testing-library/react'
import { PostCard } from '.'


const mock ={
  id: 1,
  cover: "img/img.png",
  title: 'title 3',
  body: "body 1"
}

describe('<PostCard/>', () => {
  it("should rende corectly", () => {
    render(<PostCard {...mock}/>)
    const postCard = screen.getByRole("img", {nasme: "title 3"})
    expect(postCard).toHaveAttribute('src', mock.cover )
    expect(postCard).toBeInTheDocument()

    const screenH = screen.getByRole("heading", {name:"title 3"})
    expect(screenH).toBeInTheDocument()

    const screenP = screen.getByText("body 1")
    expect(screenP).toBeInTheDocument()
    
  })
  
  it('should match snapshot', () => {
    const { container } = render(<PostCard {...mock}/>);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()

  })



})