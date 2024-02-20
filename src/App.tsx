import { useEffect, useState } from 'react';

import './App.css';

export interface AppProps {
  onUpdateValue?: (value: number) => void;
  onCreate(): void;
  onUpdate(): void;
}

function App(props: AppProps) {
  const { onUpdateValue } = props;
  const [count, setCount] = useState(0);

  const handleOnAdd = () => setCount((currentValue) => currentValue + 1);

  const handleOnMinus = () => setCount((currentValue) => currentValue - 1);

  useEffect(() => {
    if (onUpdateValue && count !== 0) onUpdateValue(count);
  }, [onUpdateValue, count]);

  return (
    <>
      <div className='card'>
        <div className='button-container'>
          <button
            role='button'
            aria-label='button increment'
            onClick={handleOnAdd}
          >
            Add Counter Value
          </button>

          <button
            role='button'
            aria-label='button decrement'
            onClick={handleOnMinus}
          >
            Minus Counter Value
          </button>
        </div>

        <p role='presentation' aria-label='counter text'>
          count is {count}
        </p>
      </div>
    </>
  );
}

export default App;
