import Counter from "./Counter"
import MandooComponent from "./MandooComponent"

export default function App() {
  const mandooTodoLists = {
    todos: ["간식 먹기", "화분 돌 다 꺼내기", "공유기 위에서 자기"],
  }

  return (
    <div style={{ width: "100vw", padding: "20px" }}>
      <h1>Mandoo Todo</h1>
      <MandooComponent width={100}></MandooComponent>
      <ul>
        {mandooTodoLists.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
      <hr />
      <h1>Counter Practice</h1>
      <Counter></Counter>
    </div>
  )
}
