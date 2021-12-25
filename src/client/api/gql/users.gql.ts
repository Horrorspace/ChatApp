import {gql, ApolloQueryResult} from '@apollo/client';
import {AbstractGql} from '@api/gql/abstract.gql';
import {IUser} from '@interfaces/IUser';


export class UsersGql extends AbstractGql {
    private static async getAllUsersQuery(): Promise<ApolloQueryResult<IUser[]>> {
        return await UsersGql.client.query({
            query: gql`
            query getAllUsers {
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
  
    private static async getUsersQuery(ids: number[]): Promise<ApolloQueryResult<IUser[]>>{
        const ids_test = {
            ids: [10, 12]
        };
        return await UsersGql.client.query({
            variables: {ids_test: ids_test},
            query: gql`
            query getUsers($ids_test: IdsInput) {
                usersById(options: $ids_test) {
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

    public static async getAllUsers(): Promise<IUser[]> {
        return await UsersGql.makeRequest<void, IUser[]>(UsersGql.getAllUsersQuery, undefined);
    }

    public static async getUsers(ids: number[]): Promise<IUser[]> {
        return await UsersGql.makeRequest<number[], IUser[]>(UsersGql.getUsersQuery, ids);
    }
}
