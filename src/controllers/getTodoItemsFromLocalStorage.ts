import { ITodo } from '../interfaces/ITodo';

export const getTodoItemsFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

  return todos;
};
