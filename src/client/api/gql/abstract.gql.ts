import {ApolloClient, createHttpLink, InMemoryCache, gql} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {config} from '@config/config';


export abstract class AbstractGql {
    protected static readonly protocol: string = config.encryption ? 'https' : 'http';
    protected static readonly baseUrl: string = `${AbstractREST.protocol}//${config.host}:${config.port}/graphql`;
  
    protected static readonly httpLink = createHttpLink({
        uri: abstractGql.baseUrl
    });
  
    protected static readonly authLink = setContext((_, {headers}) => {
        const token = localStorage.getItem('token');
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            }
        }
    });
  
    protected static readonly client = new ApolloClient({
        link: abstractGql.authLink.concat(abstractGql.httpLink),
        cache: new InMemoryCache()
    });
}
