
export class Authentification {

    isAuth: Boolean = false;

    sighIn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuth = true;
                resolve(true);
            }, 2000);
        });
    }

    signOut() {
        this.isAuth = false;
    }

}