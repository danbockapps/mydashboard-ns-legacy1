import { OnInit, Component } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { User } from "../../shared/user/user";
import { Config } from "../../shared/config";
import { Router } from "@angular/router";
import * as appSettings from "application-settings";

@Component({
    selector: "md-home",
    providers: [UserService],
    moduleId: module.id,
    templateUrl: "./home.component.html",
})

export class HomeComponent implements OnInit {
    constructor(private router: Router, private userService: UserService) {}

    ngOnInit(): void {
        console.log('The home page has been loaded.');
        this.getDashboard();
    }

    getDashboard(): void {
        this.userService.getDashboard().subscribe(
            (data) => console.log(JSON.stringify(data)),
            (error) => alert("There was an error.")
        );
    }
    
    logout(): void {
        console.log("Logging out.");
        appSettings.remove("token");
        this.router.navigate(["/login"]);
    }
}