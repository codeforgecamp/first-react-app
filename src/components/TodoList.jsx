import TodoItem from "./TodoItem";
import { data } from "./data";

function TodoList() {
  return (
    <div className="main-box">
      <div className="todo-box">
        {data.map((todo) => {
          return (
            <TodoItem
              key={`todo-item-${todo.id}`}
              isDone={todo.isDone}
              name={todo.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
