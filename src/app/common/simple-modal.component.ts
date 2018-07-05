import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-simple-modal',
    templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
    @Input() title:string;
    @Input() elementId: string;
}   