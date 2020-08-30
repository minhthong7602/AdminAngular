import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalFactory } from './utils.service';
import { localstorageName } from '../constants/config';
import { IUser } from '../interfaces/user';
import { cloundEndpoints } from '../constants/api.config';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { STATUS_CODE, IHttpResponseModel } from '../interfaces/httResponse';
import { Router } from '@angular/router';
@Injectable()
export class AuthenService {
    constructor(
        private router: Router,
        private httpClient: HttpClient,
    ) {}

    public getUserInfo(): IUser {
        return LocalFactory.getItem(localstorageName.userInfo, true) as IUser;
    }

    public loginUser(username: string, password: string) {
        const url = `${cloundEndpoints.user}/login`;
        try {
            return this.httpClient.post(url, { username, password }).pipe(
                map(data => data as IHttpResponseModel),
                map(res => {
                if (res.status === STATUS_CODE.SUCCESS) {
                    const userInfo = res.data;
                    LocalFactory.setItem(localstorageName.userInfo, userInfo);
                    return userInfo;
                }
                if (res.message) {
                    alert(res.message);
                }
                return null;
              }),
            );
        } catch (error) {
            return of(error);
        }
    }

    public getToken(): string {
        const user = this.getUserInfo();
        if (user && user.token && user.token.access_token) {
            return user.token.access_token;
        }
        return '';
    }

    public logOut(): void {
        LocalFactory.setItem(localstorageName.userInfo, null);
        this.router.navigate(['/login']);
    }
}
