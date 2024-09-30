import { exec } from 'child_process';
import { unlink } from 'node:fs';
import { promisify } from 'util';

// Convert the exec function to return a Promise, allowing use of async/await
const execPromise = promisify(exec);

// Path to the tasks file. Adjust this if your CLI uses a different path
const tasksFile = 'tasks.json';

// Function to delete the tasks file after tests
async function tearDownTasks() {
    try {
        // Attempt to delete the tasks file
        unlink(tasksFile, () => {});
        console.log('tasks.json was deleted');
    } catch (error) {
        // If the error is not "file not found", log it
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
            console.error('Error during teardown:', error);
        }
        // If the file doesn't exist, that's okay, we don't need to do anything
    }
}

// Main test suite for CLI Integration Tests
describe('CLI Integration Tests', () => {
    // Run teardown after all tests complete
    afterAll(async () => {
        await tearDownTasks();
    });

    // Test adding a task
    it('should add a task', async () => {
        const { stdout } = await execPromise('node dist/index.js add "Test task"');
        expect(stdout).toContain('Task added successfully');
    });

    // Test listing tasks (should show the task we just added)
    it('should list tasks', async () => {
        const { stdout } = await execPromise('node dist/index.js list');
        expect(stdout).toContain('Test task');
        expect(stdout).toContain('todo');  // New tasks should have 'todo' status
    });

    // Test updating a task
    it('should update a task', async () => {
        const { stdout } = await execPromise('node dist/index.js update 1 "Test task updated"');
        expect(stdout).toContain('Test task updated');
    });

    // Test marking a task as in-progress
    it('should mark a task in-progress', async () => {
        const { stdout } = await execPromise('node dist/index.js mark-in-progress 1');
        expect(stdout).toContain('Task status with ID 1 updated successfully. The new status is: in-progress');
    });

    // Test listing tasks again (should show the updated task as in-progress)
    it('should list in-progress tasks', async () => {
        const { stdout } = await execPromise('node dist/index.js list in-progress');
        expect(stdout).toContain('Test task updated');
        expect(stdout).toContain('in-progress');
    });

    // Test marking a task as done
    it('should mark a task done', async () => {
        const { stdout } = await execPromise('node dist/index.js mark-done 1');
        expect(stdout).toContain('Task status with ID 1 updated successfully. The new status is: done');
    });

    // Test listing tasks once more (should show the task as done)
    it('should list done tasks', async () => {
        const { stdout } = await execPromise('node dist/index.js list done');
        expect(stdout).toContain('Test task updated');
        expect(stdout).toContain('done');
    });

    // Test deleting a task
    it('should delete a task', async () => {
        const { stdout } = await execPromise('node dist/index.js delete 1');
        expect(stdout).toContain('Task with ID: 1 successfully removed');
    });
});