import {gql, ApolloQueryResult} from '@apollo/client';
import {AbstractGql} from '@api/gql/abstract.gql';
import {IUser} from '@interfaces/IUser';


interface IUsersRes {
    users: IUser[]
}

interface IUsersByIdRes {
    usersById: IUser[]
}


export class UsersGql extends AbstractGql {
    private static async getAllUsersQuery(): Promise<ApolloQueryResult<IUsersRes>> {
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
  
    private static async getUsersQuery(ids: number[]): Promise<ApolloQueryResult<IUsersByIdRes>>{
        const ids_test = {
            ids
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

    public static async getAllUsers(): Promise<IUsersRes> {
        return await UsersGql.makeRequest<void, IUsersRes>(UsersGql.getAllUsersQuery, undefined);
    }

    public static async getUsers(ids: number[]): Promise<IUsersByIdRes> {
        const req = await UsersGql.makeRequest<number[], IUsersByIdRes>(UsersGql.getUsersQuery, ids);
        return req;
    }
}
