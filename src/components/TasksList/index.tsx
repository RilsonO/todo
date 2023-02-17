import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Clipboard_Icon from '../../assets/clipboard.svg';
import { Task, MemoizedTaskItem } from '../TaskItem';
import { EmptyMessage, EmptyMessageContainer, EmptySubMessage } from './styles';

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (taskId: string, newTaskTitle: string) => void;
}

function TasksList({ tasks, ...rest }: TasksListProps) {
  console.log('TaskList renderizada');

  return (
    <FlatList
      contentContainerStyle={{
        paddingTop: 8,
        paddingBottom: getBottomSpace(),
      }}
      showsVerticalScrollIndicator={false}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MemoizedTaskItem task={item} {...rest} />}
      ListEmptyComponent={() => (
        <EmptyMessageContainer>
          <Clipboard_Icon width={56} height={56} />
          <EmptyMessage>
            Você ainda não tem tarefas cadastradas{'\n'}
            <EmptySubMessage>
              Crie tarefas e organize seus itens a fazer
            </EmptySubMessage>
          </EmptyMessage>
        </EmptyMessageContainer>
      )}
    />
  );
}

export const MemoizedTasksList = memo(TasksList);
