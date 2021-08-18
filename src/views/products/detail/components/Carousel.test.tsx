import Carousel from "./Carousel";
import faker from 'faker'
import {  fireEvent, render } from '@testing-library/react';

describe('Carousel', () => {
  it('should renders correctly', () => {
    const mockData = [{
      type: 'image',
      url: faker.image.image()
    }] as any

    const {queryAllByTestId} = render(<Carousel dataSource={mockData}/>)

    expect(queryAllByTestId(/slider/).length).toBe(mockData.length)
  })

  it("should call onPreview if click the slider of type image", () => {
    const mockData = [{
      type: 'image',
      url: faker.image.image()
    }, {
      type: 'video',
      url: faker.image.imageUrl()
    }] as any
    const onPreview = jest.fn()

    const {queryAllByTestId} = render(<Carousel dataSource={mockData} onPreview={onPreview}/>)

    fireEvent.click(queryAllByTestId(/slider/)[0])

    expect(onPreview).toBeCalledWith([mockData[0].url], 0)
  })
})
