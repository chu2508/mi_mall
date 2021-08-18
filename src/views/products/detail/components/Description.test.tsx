
import { render } from '@testing-library/react';
import faker from 'faker';
import Description from './Description';
describe('Description', () => {
  it('should renders correctly', () => {
    const mockData = {
      name: faker.name.title(),
      resume: faker.lorem.paragraph(),
      sellingPoints: Array.from({length: 3}).map(() => faker.lorem.lines(1))
    }

    const {queryByText, getAllByTestId} = render(<Description {...mockData}/>)

    expect(queryByText(mockData.name)).not.toBeNull()
    expect(queryByText(mockData.resume)).not.toBeNull()
    getAllByTestId('sellingPoint').forEach((dom, i) => {
      expect(dom).toHaveTextContent(mockData.sellingPoints[i])
    })
  })
})
