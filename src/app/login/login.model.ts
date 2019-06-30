export class LoginModel{
    private _user: string;
    private _pass: string;
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
    public get pass(): string {
        return this._pass;
    }
    public set pass(value: string) {
        this._pass = value;
    }
}