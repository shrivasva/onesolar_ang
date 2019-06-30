export class LoginResponse{
    private _login: boolean;
    private _user: string;
    private _role: string;
    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }
    public get user(): string {
        return this._user;
    }
    public set user(value: string) {
        this._user = value;
    }
    public get login(): boolean {
        return this._login;
    }
    public set login(value: boolean) {
        this._login = value;
    }
}