import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo';
import { getTasks } from '../service/completed-tasks.service';
import { addTask } from '../service/completed-tasks.service';
import { addCompletedTask } from '../service/completed-tasks.service';
import { NgModule } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    lastTaskName = '';
    tasks!: Todo[];
    completedTaks: Todo[] = [];
    loading: boolean = false;

    constructor() {
        getTasks().then((tasks) => {
            this.tasks = tasks.filter((task) => !task.completed);
            console.log(this.tasks);
        });
    }

    ngOnInit(): void {
        this.loading = true;
    }

    addToTodo(): void {
        if (this.lastTaskName != '') {
            let task = {
                id: this.tasks.length,
                title: this.lastTaskName,
                completed: false,
            }
            addTask(task);
            getTasks().then((tasks) => {
                this.tasks = tasks;
                console.log(this.tasks);
                this.loading = false;
            });
        }
    }

    getTaskFromInput(task: string): void {
        this.lastTaskName = task;
        this.addToTodo();
    }

    trackbyId(task: any): number {
        return task.id;
    }

    changeStatus(index: number): void {
        let lastCompletedTask = this.tasks[index];
        lastCompletedTask.completed = true;
        this.completedTaks.push(lastCompletedTask);
        this.tasks.splice(index, 1);
        addCompletedTask(lastCompletedTask);
    }
}
