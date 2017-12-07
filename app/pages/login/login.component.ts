import { OnInit, Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "md-login",
  providers: [UserService],
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login-common.css", "./login.css"]
})

export class LoginComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    console.log('hello');
  }

  submit() {
    this.userService.login(this.user)
    .subscribe(
      () => {
        alert("Login successful.");
      },
      () => alert("Unfortunately we were unable to log you in.")
    );
  }
}