import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-collapsable-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <ng-content select="[well-title]"></ng-content>
        <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
    `
})
export class CollapsableWellComponent{
    @Input() title: string;
    visible:boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}