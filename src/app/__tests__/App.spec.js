import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {

  it('should ', () => {
    const { getByText, getByLabelText } = render(<App />)
    fireEvent.click(getByText('1'))
    expect(getByLabelText('keyboard').innerHTML).toBe('1')
  });


})
