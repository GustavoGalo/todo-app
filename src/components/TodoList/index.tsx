/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  DragDropContext,
  DropResult,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd';

import { Container } from './styles';

import { swapElements } from '../../helpers/swapElements';
import { useTodo } from '../../hooks/todo';

export const TodoList: React.FC = ({ children }) => {
  const { todoList, updateTodoList } = useTodo();

  const handleDragEnd: OnDragEndResponder = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newTodoList = swapElements(todoList, source.index, destination.index);
    updateTodoList(newTodoList);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <>
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {children}
              </div>
              {provided.placeholder}
            </>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};
