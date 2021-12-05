import {UserResponse} from '../users.types';
import {User} from '../users.model';


export class UsersUtils {
    public static getUserResponse(user: User): UserResponse {
        const {
            username,
            email,
            id,
            online,
            avatarSrc,
            confirmed
        } = user.get();

        return {
            username,
            email,
            id,
            online,
            avatarSrc,
            confirmed
        }
    }
}