import { ITodo } from '../interfaces/ITodo';

interface Props {
  id?: string;
  label: string;
  completed: boolean;
}

type funcType = (todoList: Props[]) => ITodo[];

export const todoFormatter: funcType = (todoList) =>
  todoList.map((todo) => {
    if (todo.id) return todo as ITodo;
    const newTodo = todo;
    newTodo.id = new Date().valueOf().toString();
    return newTodo as ITodo;
  });
