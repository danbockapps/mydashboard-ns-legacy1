import { OnInit, Component } from "@angular/core";

@Component({
    selector: "md-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})

export class HomeComponent implements OnInit {
    ngOnInit(): void {
        console.log('The home page has been loaded.');
    }
}