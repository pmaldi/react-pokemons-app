export default class AuthentificationService {

    static isAuthenticated: boolean = false;
    static login(username: string, password: string): Promise<boolean> {
        const isAuthenticated = (username === process.env.USER && password === process.env.PASSWORD);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 1000);
        });
    }
}
