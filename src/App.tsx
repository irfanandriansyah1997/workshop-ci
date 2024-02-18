import {  useEffect, useState } from 'react'

import './App.css'

interface AppProps {
  onUpdateValue?: (value: number) => void
}

function App(props: AppProps) {
  const { onUpdateValue } = props
  const [count, setCount] = useState(0);

  const handleOnAdd = () => setCount((currentValue) => currentValue + 1)

  const handleOnMinus = () => setCount((currentValue) => currentValue - 1)

  useEffect(() => {
    if (onUpdateValue) onUpdateValue(count)
  }, [onUpdateValue, count])

  return (
    <>
      <div className="card">
        <div className="button-container">
          <button
            role="button"
            aria-label="button increment"
            onClick={handleOnAdd}
          >
            Add Counter Value
          </button>

          <button
            role="button"
            aria-label="button counter"
            onClick={handleOnMinus}
          >
            Minus Counter Value
          </button>
        </div>

        <p role="presentation" aria-label="counter text">count is {count}</p>
      </div>
    </>
  )
}

export default App
