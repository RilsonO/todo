import React, { memo } from 'react';
import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';
import { Container, Title } from './styles';

export interface Task {
  id: string;
  name: string;
  done: boolean;
}

export interface TaskProps {
  task: Task;
  toggleTaskDone: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (taskId: string, newTaskTitle: string) => void;
}

function TaskItem({ task, toggleTaskDone, removeTask, editTask }: TaskProps) {
  console.log('task: ', task.name);

  return (
    <Container>
      <Checkbox check={task.done} onPress={() => toggleTaskDone(task.id)} />
      <Title done={task.done}>{task.name}</Title>
      <DeleteButton onPress={() => removeTask(task.id)} active={false} />
    </Container>
  );
}

export const MemoizedTaskItem = memo(TaskItem);
