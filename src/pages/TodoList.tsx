import React, { FormEvent, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { classNames } from "../utils/ClassNames";

const TodoElement = ({
  todo,
  action = () => {},
}: {
  todo: string;
  action: () => void;
}) => {
  const [status, setStatus] = useState(false);
  return (
    <li
      className={classNames(
        "cursor-pointer border-t-[1px] border-gray-400 px-8 py-4 text-2xl",
        status ? "line-through text-gray-400" : ""
      )}
      onClick={(e) => {
        setStatus(!status);
      }}
      onContextMenu={(e) => {
        action();
        e.preventDefault();
      }}
    >
      {todo}
    </li>
  );
};

function TodoList() {
  useTitle("Todo List");
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((_, index) => index !== id));
  };

  return (
    <div
      className={
        "bg-slate-300 flex flex-col items-center justify-center h-screen pt-[66px]"
      }
    >
      <div
        className={
          "text-[10rem] text-center opacity-40 text-purple-500 font-bold"
        }
      >
        todos
      </div>
      <form className={"shadow max-w-full w-[400px]"} onSubmit={handleSubmit}>
        <input
          type="text"
          className={
            "text-gray-700 text-2xl px-8 py-4 block w-full focus:outline-purple-600 rounded"
          }
          id={"todo"}
          autoComplete={"off"}
          placeholder={"Enter your todo"}
          value={todo}
          onChange={handleChange}
        />
        <ul className={"bg-white"}>
          {todos.map((item, index) => (
            <TodoElement
              todo={item}
              key={index}
              action={() => handleRemoveTodo(index)}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
