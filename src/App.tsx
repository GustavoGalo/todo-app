import React, { useEffect, useState } from 'react';

import { useTheme } from './hooks/theme';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { TodoBar } from './components/TodoBar';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { getTodoItemsFromLocalStorage } from './controllers/getTodoItemsFromLocalStorage';
import {
  Container,
  Image,
  ImageWrapper,
  Header,
  TodoWrapper,
  HeadText,
  FooterLabel,
} from './styles';
import { ITodo } from './interfaces/ITodo';
import { setTodoListOnLocalStorage } from './controllers/setTodoListOnLocalStorage';
import { StatsTodoItem } from './components/StatsTodoItem';
import { Filters } from './components/ListFooter/types';
import { ListFooter } from './components/ListFooter';

const App = () => {
  const { theme } = useTheme();
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [todoBarLabel, setTodoBarLabel] = useState('');
  const [filter, setFilter] = useState<Filters>('all');

  useEffect(() => {
    const todoListData = getTodoItemsFromLocalStorage();

    setTodoList(todoListData);
  }, []);

  useEffect(() => {
    const todoListData = getTodoItemsFromLocalStorage();
    const filteredTodoListData =
      filter === 'all'
        ? todoListData
        : filter === 'active'
        ? todoListData.filter((todo) => !todo.completed)
        : todoListData.filter((todo) => todo.completed);

    setTodoList(filteredTodoListData);
  }, [filter]);

  const handleNewTodo = () => {
    const newTodoListData = [
      ...todoList,
      { completed: false, label: todoBarLabel },
    ];
    setTodoListOnLocalStorage(newTodoListData);
    setTodoList(newTodoListData);
    setTodoBarLabel('');
  };

  const toggleTodoItemCompleted = (index: number) => {
    const newTodoListData = [...todoList];

    if (newTodoListData[index]) {
      newTodoListData[index].completed = !newTodoListData[index].completed;
    }

    setTodoListOnLocalStorage(newTodoListData);
    setTodoList(newTodoListData);
  };

  const clearCompletedTodos = () => {
    const newTodoListData = todoList.filter((todo) => !todo.completed);

    setTodoList(newTodoListData);
  };

  const handleRemoveTodo = (index: number) => {
    const newTodoList = todoList.filter(
      (_, todoListIndex) => todoListIndex !== index,
    );

    setTodoListOnLocalStorage(newTodoList);
    setTodoList(newTodoList);
  };

  return (
    <Container>
      <ImageWrapper>
        <Image src={theme.backgroundImage} alt="background image" />
      </ImageWrapper>
      <TodoWrapper>
        <Header>
          <HeadText>TODO</HeadText>
          <ThemeSwitcher />
        </Header>
        <TodoBar
          value={todoBarLabel}
          onValueChange={setTodoBarLabel}
          onAddNewTodo={handleNewTodo}
        />
        <TodoList>
          {todoList.map(({ completed, label }, index) => (
            <TodoItem
              key={label}
              label={label}
              selected={completed}
              isFisrtItem={index === 0}
              onRadioClick={() => toggleTodoItemCompleted(index)}
              onRemove={() => handleRemoveTodo(index)}
            />
          ))}
          <StatsTodoItem
            itemsLeft={
              todoList.filter((todo) => todo.completed === false).length
            }
            onClearCompleted={clearCompletedTodos}
          />
        </TodoList>
        <ListFooter listBy={filter} onChangeFilter={setFilter} />
        <FooterLabel>Drag and drop to reorder list</FooterLabel>
      </TodoWrapper>
    </Container>
  );
};

export default App;
