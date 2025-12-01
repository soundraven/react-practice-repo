import { Fragment, useState } from "react"

export default function Counter() {
  const [number, setNumber] = useState(0)
  const [inputValue, setInputValue] = useState("")

  const increaseNumber = Number(inputValue)

  return (
    <main>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1)
        }}>
        + 1
      </button>
      <br />
      <input
        type="text"
        placeholder="숫자만 적으세요"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value
          if (value === "") {
            setInputValue("")
            return
          }

          if (isNaN(Number(value))) {
            alert("숫자만 입력해주세요")
            setInputValue("")
            return
          }

          setInputValue(value)
        }}
      />
      <br />
      <button
        onClick={() => {
          setNumber(number + increaseNumber)
        }}>
        + {increaseNumber}
      </button>
    </main>
  )
}
