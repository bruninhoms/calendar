import { Injectable, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import axios, { AxiosRequestConfig } from "axios";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class WeatherService implements OnInit {
  public climate$ = new Subject<any>();

  constructor() {}

  ngOnInit() {}

  public getApiInfo(city: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: city,
        units: "imperial",
      },
      headers: {
        "x-rapidapi-key": environment.API_KEY,
        "x-rapidapi-host": environment.API_HOST,
      },
    };

    console.log(options);

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.getClima().next(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public getClima(): Subject<any> {
    return this.climate$;
  }
}
