import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TitleBlock from '..'

describe('TitleBlock component', () => {
  test('renders TitleBlock component correctly with default values', () => {
    render(<TitleBlock />)

    // Check if the TitleBlock component is rendered correctly with default values
    expect(screen.getByText('Section Title')).toBeInTheDocument()
    expect(screen.getByText('Section Sub Title')).toBeInTheDocument()

    // Check if the align prop is applied correctly
    expect(screen.getByTestId('title-block')).toHaveClass('items-center')
  })

  test('renders TitleBlock component correctly with custom values', () => {
    render(
      <TitleBlock
        title='Custom Title'
        subTitle='Custom Sub Title'
        align='items-end'
      />,
    )

    // Check if the TitleBlock component is rendered correctly with custom values
    expect(screen.getByText('Custom Title')).toBeInTheDocument()
    expect(screen.getByText('Custom Sub Title')).toBeInTheDocument()

    // Check if the align prop is applied correctly
    expect(screen.getByTestId('title-block')).toHaveClass('items-end')
  })
})
