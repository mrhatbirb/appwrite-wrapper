import Api from './api';

class Auth extends Api{
    constructor(){
        super();
    }

    public createAccount(email: string, password: string, name?: string): Promise<object>{
        return this.sdk.account.create(email, password, name);
    }

    public logIn(email: string, password: string): Promise<object> {
        return this.sdk.account.createSession(email, password);
    }
    
    public logOut(): Promise<object> {
        return this.sdk.account.deleteSession('current');
    }

    public currentUser(): Promise<object> {
        return this.sdk.account.get();
    }

    public deleteAccount(): Promise<object> {
        return this.sdk.account.delete();
    }

    public changeName(new_name: string): Promise<object> {
        return this.sdk.account.updateName(new_name);
    }

    public changePassword(new_password: string, old_password: string): Promise<object> {
        return this.sdk.account.updatePassword(new_password, old_password);
    }

    public changeEmail(new_email: string, password: string): Promise<object> {
        return this.sdk.account.updateEmail(new_email, password);
    }

    public setAccountPreferences(preferences: object) {
        this.sdk.account.updatePrefs(preferences);
    }

    public getAccountPreferences(): Promise<any> {
        return this.sdk.account.getPrefs();
    }

}

export default Auth;