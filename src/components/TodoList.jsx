import TodoItem from "./TodoItem";

function TodoList() {
  const data = [
    {
      name: "Buy groceries",
      isDone: false,
      id: 1,
    },
    {
      name: "Finish report",
      isDone: true,
      id: 2,
    },
    {
      name: "Go for a run",
      isDone: false,
      id: 3,
    },
    {
      name: "Call mom",
      isDone: true,
      id: 4,
    },
    {
      name: "Read a book",
      isDone: false,
      id: 5,
    },
    {
      name: "Attend meeting",
      isDone: true,
      id: 6,
    },
    {
      name: "Pay bills",
      isDone: false,
      id: 7,
    },
    {
      name: "Clean the house",
      isDone: true,
      id: 8,
    },
    {
      name: "Study for exam",
      isDone: false,
      id: 9,
    },
    {
      name: "Plan vacation",
      isDone: true,
      id: 10,
    },
  ];

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
