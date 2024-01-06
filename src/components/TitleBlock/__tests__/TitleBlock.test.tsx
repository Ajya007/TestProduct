import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TitleBlock from '..';

describe('TitleBlock component', () => {
  test('renders TitleBlock component correctly with default values', () => {
    const { getByText, getByTestId } = render(<TitleBlock />);
    
    // Check if the TitleBlock component is rendered correctly with default values
    expect(getByText('Section Title')).toBeInTheDocument();
    expect(getByText('Section Sub Title')).toBeInTheDocument();
    
    // Check if the align prop is applied correctly
    expect(getByTestId('title-block')).toHaveClass('items-center');
  });

  test('renders TitleBlock component correctly with custom values', () => {
    const { getByText, getByTestId } = render(<TitleBlock title="Custom Title" subTitle="Custom Sub Title" align="items-end" />);
    
    // Check if the TitleBlock component is rendered correctly with custom values
    expect(getByText('Custom Title')).toBeInTheDocument();
    expect(getByText('Custom Sub Title')).toBeInTheDocument();
    
    // Check if the align prop is applied correctly
    expect(getByTestId('title-block')).toHaveClass('items-end');
  });
});