import { OnInit, Component } from "@angular/core";

@Component({
    selector: "md-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})

export class LoginComponent implements OnInit {
    ngOnInit(): void {
        console.log('hello');
    }
}