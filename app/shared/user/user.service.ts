import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";

// This is TypeScript for var appSettings = require("application-settings");
import * as appSettings from "application-settings";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  login(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "login",
      JSON.stringify({
        email: user.email,
        password: user.password
      }),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
      // I don't think Config needs token.
      //Config.token = data.token;
      //TODO change server responses to things other than 200 OK and handle them here
      console.log(JSON.stringify(data));
      appSettings.setString("token", data.token);
      console.log("Token saved to settings: " + appSettings.getString("token"));
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log('An error occurred with user service. ' + error);
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}