export interface IToken {
    access_token: string;
}

export interface IUserInfo {
    userId: number;
    username?: string;
    roleId?: number;
}

export interface IUser {
    token: IToken;
    user: IUserInfo;
}
