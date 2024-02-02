import React, { createContext, useContext, useMemo, useState } from 'react';
import { ITodo } from '../../interfaces/ITodo';

interface TodoContextData {
  todoList: ITodo[];
  updateTodoList(list: ITodo[]): void;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export const useTodo = () => useContext(TodoContext);

export const TodoProvider: React.FC = ({ children }) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const updateTodoList = (list: ITodo[]) => {
    setTodoList(list);
  };

  const contextValue = useMemo(
    () => ({ todoList, updateTodoList }),
    [todoList],
  );

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
