import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-simple-modal',
    template: `
    <div id="simple-modal" class="modal modal-fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span></button>
                    <h4>{{title}}</h4>
                </div>
                <div class="modal-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `
})
export class SimpleModalComponent {
    @Input() title:string;

}