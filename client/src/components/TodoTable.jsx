import TodoEntry from './TodoEntry';
import { useState, useEffect } from 'react';
import todoService from '../services/todo.service';

function TodoTable() {
  const [todos, setTodos] = useState(undefined);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await todoService.getTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  if (todos === undefined) {
    return (
      <div className="flex items-center justify-center w-full mt-16">
        <span className="loading loading-ring loading-lg" />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border-[1px] rounded-lg shadow">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Tags</th>
            <th></th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {todos?.map((t) => (
            <TodoEntry
              id={Number(t.id)}
              title={t.title}
              dueDateISO={t.due_date}
              isCompleted={t.is_completed}
              key={t.id}
            />
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}

export default TodoTable;
