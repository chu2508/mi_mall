import { render } from "@testing-library/react"
import faker from "faker"
import Parameter from "./Parameter"

describe('Parameter', () => {
  it('should renders correctly', () => {
    const mockData = [
      {icon: faker.image.image(), desc: faker.lorem.lines(1)},
      {icon: faker.image.image(), desc: faker.lorem.lines(1)},
      {icon: faker.image.image(), desc: faker.lorem.lines(1)},
    ]
    const {getAllByTestId} = render(<Parameter dataSource={mockData}/>)

    getAllByTestId('param').forEach((dom, index) => {
      expect(dom).toHaveTextContent(mockData[index].desc)
    })
  })
})
