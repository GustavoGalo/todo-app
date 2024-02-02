/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import { Draggable } from 'react-beautiful-dnd';
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
import { setTodoListOnLocalStorage } from './controllers/setTodoListOnLocalStorage';
import { StatsTodoItem } from './components/StatsTodoItem';
import { Filters } from './components/ListFooter/types';
import { ListFooter } from './components/ListFooter';
import { todoFormatter } from './helpers/todoFormatter';
import { useTodo } from './hooks/todo';

const App = () => {
  const { theme } = useTheme();
  const { todoList, updateTodoList } = useTodo();
  const [todoBarLabel, setTodoBarLabel] = useState('');
  const [filter, setFilter] = useState<Filters>('all');

  useEffect(() => {
    const todoListData = getTodoItemsFromLocalStorage();

    updateTodoList(todoListData);
  }, []);

  useEffect(() => {
    const todoListData = getTodoItemsFromLocalStorage();
    const filteredTodoListData =
      filter === 'all'
        ? todoListData
        : filter === 'active'
        ? todoListData.filter((todo) => !todo.completed)
        : todoListData.filter((todo) => todo.completed);

    updateTodoList(filteredTodoListData);
  }, [filter]);

  const handleNewTodo = () => {
    const newTodoListData = [
      ...todoList,
      { completed: false, label: todoBarLabel },
    ];
    setTodoListOnLocalStorage(todoFormatter(newTodoListData));
    updateTodoList(todoFormatter(newTodoListData));
    setTodoBarLabel('');
  };

  const toggleTodoItemCompleted = (index: number) => {
    const newTodoListData = [...todoList];

    if (newTodoListData[index]) {
      newTodoListData[index].completed = !newTodoListData[index].completed;
    }

    setTodoListOnLocalStorage(newTodoListData);
    updateTodoList(newTodoListData);
  };

  const clearCompletedTodos = () => {
    const newTodoListData = todoList.filter((todo) => !todo.completed);

    updateTodoList(newTodoListData);
  };

  const handleRemoveTodo = (index: number) => {
    const newTodoList = todoList.filter(
      (_, todoListIndex) => todoListIndex !== index,
    );

    setTodoListOnLocalStorage(newTodoList);
    updateTodoList(newTodoList);
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
          {todoList.map(({ completed, label, id }, index) => (
            <Draggable
              key={id}
              draggableId={id || index.toString()}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    background: snapshot.isDragging ? 'lightblue' : 'white',
                    ...provided.draggableProps.style,
                  }}
                >
                  <TodoItem
                    key={id}
                    label={label}
                    selected={completed}
                    isFirstItem={index === 0}
                    onRadioClick={() => toggleTodoItemCompleted(index)}
                    onRemove={() => handleRemoveTodo(index)}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </TodoList>
        <StatsTodoItem
          itemsLeft={todoList.filter((todo) => todo.completed === false).length}
          onClearCompleted={clearCompletedTodos}
        />
        <ListFooter listBy={filter} onChangeFilter={setFilter} />
        <FooterLabel>Drag and drop to reorder list</FooterLabel>
      </TodoWrapper>
    </Container>
  );
};

export default App;
