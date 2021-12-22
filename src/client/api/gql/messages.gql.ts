import {gql, ApolloQueryResult} from '@apollo/client';
import {AbstractGql} from '@api/gql/abstract.gql';
import {IMessage} from '@interfaces/IMessage';


export class MessagesGql extends AbstractGql {
    private static async getAllMessagesQuery(): Promise<ApolloQueryResult<IMessage[]>> {
        return await MessagesGql.client.query({
            query: gql`
            query getMessages {
                messages {
                    id
                    toUserId
                    fromUserId
                    text
                    date
                    readed
                }
            }`
        })
    }
  
    public static async getAllMessages(): Promise<IMessage[]> {
        return await MessagesGql.makeRequest<void, IMessage[]>(MessagesGql.getAllMessagesQuery, undefined);
    }
}
