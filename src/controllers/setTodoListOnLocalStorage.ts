import { ITodo } from '../interfaces/ITodo';

export const setTodoListOnLocalStorage = (todoList: ITodo[]) => {
  localStorage.setItem(
    'todos',
    JSON.stringify(Object.assign(todoList, { id: new Date().valueOf() })),
  );
};
