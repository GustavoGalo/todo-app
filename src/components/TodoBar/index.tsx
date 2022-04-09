import React, { Dispatch, SetStateAction } from 'react';

import { Container, Input, Circle } from './styled';

interface ITodoBarProps {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  onAddNewTodo: () => void;
}

export const TodoBar: React.FC<ITodoBarProps> = ({
  value,
  onValueChange,
  onAddNewTodo,
}) => (
  <Container>
    <Circle />
    <Input
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      placeholder="Create a new todo..."
      onKeyDown={({ key }) => key === 'Enter' && onAddNewTodo()}
    />
  </Container>
);
