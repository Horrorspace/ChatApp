import {AbstractGql} from '@api/gql/abstract.gql';
import {IUser} from '@interfaces/IUser';


export class UsersGql extends AbstractGql {
    public static async getAllUsers(): Promise<IUser> {
        return await UsersGql.client.query({
            query: gql`
            query get {
                users {
                    id
                    online
                    avatarSrc
                    confirmed
                    username
                    email
                }
            }`
        })
    }
  
    public static async getUsers(): Promise<IUser[]> {
        return await UsersGql.client.query({
            query: gql`
            query get {
                usersById({ids: [10, 11, 12]}) {
                    id
                    online
                    avatarSrc
                    confirmed
                    username
                    email
                }
            }`
        })
    }
}
