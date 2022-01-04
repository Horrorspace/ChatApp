import {gql, ApolloQueryResult} from '@apollo/client';
import {AbstractGql} from '@api/gql/abstract.gql';
import {IMessage} from '@interfaces/IMessage';

interface IMessageRes {
    messages: IMessage[];
}

export class MessagesGql extends AbstractGql {
    private static async getAllMessagesQuery(): Promise<ApolloQueryResult<IMessageRes>> {
        try {
            const res = await MessagesGql.client.query<IMessageRes>({
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
            });
            return res;
        }
        catch(error) {
            throw error;
        }
    }
  
    public static async getAllMessages(): Promise<IMessageRes> {
        return await MessagesGql.makeRequest<void, IMessageRes>(MessagesGql.getAllMessagesQuery, undefined);
    }
}