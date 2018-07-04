import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ISession } from "../event.model";

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px;}
        .error input, .error select, .error textarea { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateSessionComponent implements OnInit {
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;
    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords]);
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }
    presenterInvalid(): boolean {
        return this.presenter.invalid && (this.presenter.dirty || this.presenter.touched)
    }
    nameInvalid() : boolean {
        return this.name.invalid && (this.name.dirty || this.name.touched)
    }
    private restrictedWords(control: FormControl): {[key:string]: any} {
        return control.value.includes('foo') ? {'restrictedWords': 'foo'} : null;
    }
    saveSession(formValues) {
        let session:ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        console.log(session);
    }
}