import { useParams } from 'next/navigation';

import { Flexbox, Typography } from '@/components/atoms';

import useQueryUserTodos from '@/hooks/useQueryUserTodos';

function UserTodosList() {
  const params = useParams();
  const id = Number(params.id);
  const { data: userTodosData } = useQueryUserTodos(id);

  if (!userTodosData) return null;
  return (
    <Flexbox
      direction="column"
      style={{
        padding: '0 20px'
      }}
      gap={10}
    >
      {userTodosData.todos.map((todo) => (
        <Flexbox key={todo.userId} justify="space-between" align="center">
          <Typography>{todo.todo}</Typography>
          <Typography>{todo.completed ? '✅' : ''}</Typography>
        </Flexbox>
      ))}
    </Flexbox>
  );
}

export default UserTodosList;

/**
 * 1. 순환참조 이슈
 * 2. 스크롤 관성 이슈 IOS
 * 3. 이벤트 전파 이슈
 * 4. 날짜 표현 이슈
 *
 */
