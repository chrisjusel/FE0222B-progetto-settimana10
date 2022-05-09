import { Todo } from '../interface/todo';

let tasks: Todo[] = [];
let completedTasks: Todo[] = [];

export function getCompletedTasks(): Promise<Todo[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(completedTasks);
        }, 2000);
    });
}

export function addCompletedTask(task: Todo) {
    completedTasks.push(task);
}

export function getTasks(): Promise<Todo[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(tasks);
        }, 2000);
    });
}

export function addTask(task: Todo): Promise<Todo>{
    return new Promise((res, rej) => {
        setTimeout(() => {
            tasks.push(task);
            res(task);
        }, 2000);
    });
}
