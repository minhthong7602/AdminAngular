import { Injectable } from '@angular/core';
import { ROLE_CONFIG } from '../constants/config';
import { IUserInfo } from '../interfaces/user';
import { AuthenService } from './auth.service';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    userInfo: IUserInfo;
    constructor(private authenService: AuthenService) {
    }

    isSuperAdmin() {
        this.userInfo = this.authenService.getUserInfo().user;
        return this.userInfo && this.userInfo.roleId === parseInt(ROLE_CONFIG.SUPPER_ADMIN);
    }
}