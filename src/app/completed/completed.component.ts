import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo';
import { getCompletedTasks } from '../service/completed-tasks.service';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
    completedTasks!: Todo[];
    constructor() {
        getCompletedTasks().then((completed) => {
            this.completedTasks = completed;
        });
    }

    ngOnInit(): void {}
}
