import { OnInit, Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Config } from "../../shared/config";
import * as appSettings from "application-settings";
import * as connectivity from "tns-core-modules/connectivity";

@Component({
  selector: "md-login",
  providers: [UserService],
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login-common.css", "./login.css"]
})

export class LoginComponent implements OnInit {
  user: User;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    if(appSettings.getString('token')) {
      this.router.navigate(["/home"]);
    }
  }

  submit() {
    if(connectivity.getConnectionType() === connectivity.connectionType.none) {
      alert("Internet connection not found.");
    }
      else {
      this.userService.login(this.user)
      .subscribe(
        () => this.router.navigate(["/home"]),
        (error) => alert("Unfortunately we could not find your account.")
      );
    }
  }
}