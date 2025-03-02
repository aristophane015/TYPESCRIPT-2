// Todo Manager class to manage Todo items
class TodoManager {
  constructor() {
    this.todoList = [];
    this.idCounter = 1;
  }

  // Method to add a new task
  addTask(description, dueDate) {
    const task = {
      id: this.idCounter,
      description: description,
      isCompleted: false,
      dueDate: dueDate,
    };
    this.todoList.push(task);
    this.idCounter++;
  }

  // Method to mark a task as completed
  completeTask(id) {
    const task = this.todoList.find(item => item.id === id);
    if (task) {
      task.isCompleted = true;
    } else {
      console.error(`Task with ID ${id} does not exist.`);
    }
  }

  // Method to delete a task from the list
  deleteTask(id) {
    const taskIndex = this.todoList.findIndex(item => item.id === id);
    if (taskIndex !== -1) {
      this.todoList.splice(taskIndex, 1);
    } else {
      console.error(`Task with ID ${id} not found.`);
    }
  }

  // Method to retrieve all tasks
  getAllTasks() {
    return this.todoList;
  }

  // Method to filter tasks based on their completion status
  getTasksByCompletionStatus(isCompleted) {
    return this.todoList.filter(task => task.isCompleted === isCompleted);
  }

  // Method to update the description of a task
  changeTaskDescription(id, newDescription) {
    const task = this.todoList.find(item => item.id === id);
    if (task) {
      task.description = newDescription;
    } else {
      console.error(`Task with ID ${id} does not exist.`);
    }
  }

  // Method to remove all completed tasks
  removeCompletedTasks() {
    this.todoList = this.todoList.filter(task => !task.isCompleted);
  }
}

// Example usage of the TodoManager class
const myTodoManager = new TodoManager();
myTodoManager.addTask('Complete TypeScript assignment', new Date('2025-03-10'));
myTodoManager.addTask('Read a novel', new Date('2025-03-05'));

console.log('All Tasks:', myTodoManager.getAllTasks());

myTodoManager.completeTask(1);  // Mark the first task as completed

console.log('Updated Tasks:', myTodoManager.getAllTasks());

myTodoManager.changeTaskDescription(2, 'Read a new book');  // Change task description

console.log('Tasks After Description Change:', myTodoManager.getAllTasks());

myTodoManager.removeCompletedTasks();  // Remove tasks that are marked as completed

console.log('Tasks After Removing Completed:', myTodoManager.getAllTasks());
