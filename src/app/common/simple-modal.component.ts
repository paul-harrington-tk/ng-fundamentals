import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from ".";

@Component({
    selector: 'app-simple-modal',
    templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
    @Input() title:string;
    @Input() elementId: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {
        
    }

    closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}   