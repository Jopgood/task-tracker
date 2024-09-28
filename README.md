# Task Tracker CLI

Task Tracker CLI is a simple command-line interface tool for managing your to-do list. It allows you to add, update, delete, list tasks, and change task statuses directly from your terminal.

## Features

- Add new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as in-progress or done
- List all tasks
- Filter tasks by status (todo, in-progress, done)

## Installation

To install Task Tracker CLI, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/task-tracker-cli.git
   cd task-tracker-cli
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Build the project:
   ```
   npm run build
   ```
4. Link the CLI tool globally:
   ```
   npm link
   ```

## Usage

After installation, you can use the `task-cli` command from anywhere in your terminal.

### Adding a new task

```
task-cli add "Buy groceries"
```

### Updating a task

```
task-cli update 1 "Buy groceries and cook dinner"
```

### Deleting a task

```
task-cli delete 1
```

### Marking a task as in-progress or done

```
task-cli mark-in-progress 1
task-cli mark-done 1
```

### Listing tasks

List all tasks:
```
task-cli list
```

List tasks by status:
```
task-cli list done
task-cli list todo
task-cli list in-progress
```

## Development

To set up the project for development:

1. Clone the repository
2. Install dependencies with `npm install`
3. Make your changes
4. Build the project with `npm run build`
5. Test your changes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Roadmap.sh

https://roadmap.sh/projects/task-tracker
