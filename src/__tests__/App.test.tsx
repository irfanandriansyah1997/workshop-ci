import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { AppProps } from '@/App';

const onUpdateValueSpy = jest.fn();

const MOCK_PROPS: AppProps = {
  // data: useHandlerResponse,
  onUpdateValue: onUpdateValueSpy,
  onCreate: jest.fn(),
  onUpdate: jest.fn()
};

describe('Testing App Component', () => {
  beforeAll(() => console.log('invoked all'));

  beforeEach(() => {
    jest.clearAllMocks();
    console.log('invoked each');
  });

  it('Should be render correctly', async () => {
    render(<App {...MOCK_PROPS} />);
    const button = screen.getByRole('button', { name: 'button increment' });
    const text = screen.getByRole('presentation', { name: 'counter text' });

    expect(button).toHaveTextContent('Add Counter Value');
    expect(text).toHaveTextContent('count is 0');
  });

  it('Simulate click button add should be text will be updated', async () => {
    render(<App {...MOCK_PROPS} />);
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

  it('Simulate click button minus should be text will be updated and onUpdateValue props will be invoked', async () => {
    render(<App {...MOCK_PROPS} />);
    const buttonMinus = screen.getByRole('button', {
      name: 'button decrement'
    });
    const text = screen.getByRole('presentation', { name: 'counter text' });

    expect(text).toHaveTextContent('count is 0');

    /**
     * Simulate click button
     */
    expect(onUpdateValueSpy).not.toHaveBeenCalled();
    await act(() => userEvent.click(buttonMinus));

    expect(onUpdateValueSpy).toHaveBeenCalledTimes(2);
    expect(onUpdateValueSpy).toHaveBeenNthCalledWith(2, -1);

    expect(text).toHaveTextContent('count is -1');
  });
});
