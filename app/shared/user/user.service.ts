import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable()
export class UserService {
  login(user: User) {
    alert("About to login: " + user.email);
  }
}