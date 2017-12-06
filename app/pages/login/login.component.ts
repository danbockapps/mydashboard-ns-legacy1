import { OnInit, Component } from "@angular/core";
import { User } from "../../shared/user/user";

@Component({
  selector: "md-login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login-common.css", "./login.css"]
})

export class LoginComponent implements OnInit {
  user: User;
  email = "nativescriptrocks@telerik.com";

  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
    console.log('hello');
  }

  submit() {
    alert("You’re using: " + this.user.email);
  }
}