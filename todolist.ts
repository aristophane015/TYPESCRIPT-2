// Interface for a Todo item
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
  }
  
  // TodoList class to manage todo items
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    // Adds a new todo item
    addTodo(task: string, dueDate: Date): void {
      const newTodo: TodoItem = {
        id: this.nextId,
        task: task,
        completed: false,
        dueDate: dueDate,
      };
      this.todos.push(newTodo);
      this.nextId++;
    }
  
    // Marks a todo item as completed
    completeTodo(id: number): void {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = true;
      } else {
        console.error(`Todo item with id ${id} not found.`);
      }
    }
  
    // Removes a todo item
    removeTodo(id: number): void {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      } else {
        console.error(`Todo item with id ${id} not found.`);
      }
    }
  
    // Lists all todo items
    listTodos(): TodoItem[] {
      return this.todos;
    }
  
    // Filters todos by completed status
    filterByCompletion(completed: boolean): TodoItem[] {
      return this.todos.filter(todo => todo.completed === completed);
    }
  
    // Updates the task description of a todo item
    updateTask(id: number, newTask: string): void {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.task = newTask;
      } else {
        console.error(`Todo item with id ${id} not found.`);
      }
    }
  
    // Clears all completed todos
    clearCompletedTodos(): void {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
  
  // Example usage
  const todoList = new TodoList();
  todoList.addTodo('Finish TypeScript project', new Date('2025-03-10'));
  todoList.addTodo('Read a book', new Date('2025-03-05'));
  
  console.log('All Todos:', todoList.listTodos());
  
  todoList.completeTodo(1);  // Mark the first todo as completed
  
  console.log('Todos after completion:', todoList.listTodos());
  
  todoList.updateTask(2, 'Read a new book');  // Update the second todo's task description
  
  console.log('Todos after update:', todoList.listTodos());
  
  todoList.clearCompletedTodos();  // Clear completed todos
  
  console.log('Todos after clearing completed:', todoList.listTodos());
  