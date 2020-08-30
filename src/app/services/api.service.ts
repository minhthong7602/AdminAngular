import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalFactory } from './utils.service';
import { localstorageName } from '../constants/config';
import { IUserInfo } from '../interfaces/user';
import { cloundEndpoints } from '../constants/api.config';
import { of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { STATUS_CODE, IHttpResponseModel } from '../interfaces/httResponse';
import { ToastService } from './toast.service';
@Injectable({
providedIn: 'root',
})
export class ApiService {
  constructor(
      private httpClient: HttpClient,
      private toastService: ToastService,
  ) {}
  //#region User
  public getAllUser() {
      const url = `${cloundEndpoints.user}/getall`;
      try {
          return this.httpClient.get(url).pipe(
              map(data => data as IHttpResponseModel),
              map(res => {
              if (res.status === STATUS_CODE.SUCCESS) {
                return res.data;
              }
              return null;
            }),
          );
      } catch (error) {
          return of(error);
      }
  }

  public addOrEditUser(user: IUserInfo) {
      const url = `${cloundEndpoints.user}/register`;
      try {
          return this.httpClient.post(url, user).pipe(
              map(data => data as IHttpResponseModel),
              map(res => {
              if (res.status === STATUS_CODE.SUCCESS) {
                return res.data;
              }
              return null;
            }),
          );
      } catch (error) {
          return of(error);
      }
  }

  public activeOrDeactiveUser(userId: number, isActive) {
    const url = `${cloundEndpoints.user}/deactive`;
      try {
          return this.httpClient.put(url, { userId,  isActive }).pipe(
              map(data => data as IHttpResponseModel),
              map(res => {
              if (res.status === STATUS_CODE.SUCCESS) {
                 return res.data;
              }
              return null;
            }),
          );
      } catch (error) {
          return of(error);
      }
  }
  //#endregion
}
