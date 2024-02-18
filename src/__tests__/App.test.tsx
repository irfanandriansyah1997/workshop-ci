import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';

describe('Testing App Component', () => {
  it('Should be render correctly', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'button increment' });
    const text = screen.getByRole('presentation', { name: 'counter text' });

    expect(button).toHaveTextContent('Add Counter Value');
    expect(text).toHaveTextContent('count is 0');
  });

  it('Simulate click button add should be text will be updated', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'button increment' });
    const text = screen.getByRole('presentation', { name: 'counter text' });

    expect(button).toHaveTextContent('Add Counter Value');
    expect(text).toHaveTextContent('count is 0');

    /**
     * Simulate click button
     */
    await act(() => userEvent.click(button));

    expect(text).toHaveTextContent('count is 1');
  });
});
