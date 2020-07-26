
import { User } from '../../pojo/user.model';
import { Subject } from 'rxjs';


export class UserService {

    private users: User[] = [new User("ilyes", "mansour", "inzodialo@gmail.com", "vodka", ['jogging', 'swimming'])];
    userEmiter = new Subject<User[]>();
    notifyUser() {
        this.userEmiter.next(this.users.slice());
    }

    addUser(user:User){

        this.users.push(user);
        this.notifyUser();
    }
}