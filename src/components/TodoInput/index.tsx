import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { AddButton } from '../AddButton';
import { Input } from '../Input';
import { Container } from './styles';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddTask() {
    addTask(task);
    setTask('');
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Input
        placeholder={'Adicione uma nova tarefa'}
        autoComplete={'off'}
        autoCorrect={false}
        value={task}
        onChangeText={setTask}
      />
      <AddButton onPress={handleAddTask} enabled={!!task} />
    </Container>
  );
}
