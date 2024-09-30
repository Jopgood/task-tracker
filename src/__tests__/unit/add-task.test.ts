import { addTask } from '../../utils/add-task';
import { readTasks, writeTasks } from '../../utils/task-helpers';

jest.mock('../../utils/task-helpers');

describe('addTask', () => {
  it('should add a new task', () => {
    const mockReadTasks = readTasks as jest.MockedFunction<typeof readTasks>;
    const mockWriteTasks = writeTasks as jest.MockedFunction<typeof writeTasks>;
    
    mockReadTasks.mockReturnValue([]);
    mockWriteTasks.mockImplementation(() => {});

    addTask('Test task');

    expect(mockWriteTasks).toHaveBeenCalledWith([
      expect.objectContaining({
        id: 1,
        description: 'Test task',
        status: 'todo',
      }),
    ]);
  });
});