import React, { useState, memo, useCallback } from 'react';
import { useTheme } from 'styled-components';
import {
  Alert,
  FlatList,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { MemoizedTaskItem, Task } from '../../components/TaskItem';
import uuid from 'react-native-uuid';
import {
  Container,
  Header,
  Logo,
  TasksInfo,
  InfoContainer,
  InfoTitle,
  NumberContainer,
  InfoNumber,
  Body,
} from './styles';
import { TodoInput } from '../../components/TodoInput';
import { MemoizedTasksList } from '../../components/TasksList';

export function Home() {
  const theme = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAdd(newTask: string) {
    if (tasks.find((item) => item.name === newTask)) {
      Alert.alert('Já existe uma tarefa com este nome.');
      return;
    }
    setTasks((prev) => [
      ...prev,
      {
        id: String(uuid.v4()),
        name: newTask,
        done: false,
      },
    ]);
  }

  function handleEditTask() {}

  function handleRemoveTask(id: string) {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  }

  const handleToggleTaskDone = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            done: !item.done,
          };
        }
        return item;
      })
    );
    console.log('handleCheck is called');
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor={'transparent'}
      />
      <Header>
        <Logo source={require('../../assets/logo.png')} />
      </Header>

      <Body>
        <TodoInput addTask={handleAdd} />

        <TasksInfo>
          <InfoContainer>
            <InfoTitle style={{ color: theme.colors.blue }}>Criadas</InfoTitle>
            <NumberContainer>
              <InfoNumber>{tasks.length}</InfoNumber>
            </NumberContainer>
          </InfoContainer>

          <InfoContainer>
            <InfoTitle style={{ color: theme.colors.purple }}>
              Concluídas
            </InfoTitle>
            <NumberContainer>
              <InfoNumber>
                {tasks.filter((task) => task.done).length}
              </InfoNumber>
            </NumberContainer>
          </InfoContainer>
        </TasksInfo>

        <MemoizedTasksList
          tasks={tasks}
          toggleTaskDone={handleToggleTaskDone}
          removeTask={handleRemoveTask}
          editTask={handleEditTask}
        />
      </Body>
    </Container>
  );
}
