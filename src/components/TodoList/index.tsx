/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Container } from './styles';

export const TodoList: React.FC = ({ children }) => (
  <Container>
    <DragDropContext onDragEnd={console.log}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {children}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </Container>
);
