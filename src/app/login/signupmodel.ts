export class SignUpModel {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _mobile: string;
    private _address: string;
    private _state: string;
    private _city: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get mobile(): string {
        return this._mobile;
    }
    public set mobile(value: string) {
        this._mobile = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get state(): string {
        return this._state;
    }
    public set state(value: string) {
        this._state = value;
    }
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

}