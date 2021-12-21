import {ApolloClient, createHttpLink, InMemoryCache, ApolloQueryResult} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {config} from '@config/config';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


type gqlQuery<T, R> = (arg: T) => Promise<ApolloQueryResult<R>>


export abstract class AbstractGql {
    protected static readonly protocol: string = config.encryption ? 'https' : 'http';
    protected static readonly baseUrl: string = `${AbstractGql.protocol}//${config.host}:${config.port}/graphql`;
  
    protected static readonly httpLink = createHttpLink({
        uri: '/graphql'
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
        link: AbstractGql.authLink.concat(AbstractGql.httpLink),
        cache: new InMemoryCache()
    });

    protected static isSuccessful<T>(apolloRes: ApolloQueryResult<T>): boolean {       
        return !(apolloRes.errors || apolloRes.error);
    }

    protected static observableGql<T, R>(query: gqlQuery<T, R>, arg: T): Observable<ApolloQueryResult<R>> {
        return new Observable(subscriber => {
            query(arg)
                .then(res => {
                    subscriber.next(res);
                    subscriber.complete();
                })
                .catch(err => {
                    subscriber.error(err);
                })
        })
    }

    protected static async makeRequest<T, R>(query: gqlQuery<T, R>, arg: T): Promise<R> {
        return new Promise((resolve, reject) => {
            const request$ = AbstractGql.observableGql<T, R>(query, arg)
                .pipe(
                    map<ApolloQueryResult<R>, R>(res => {
                        const isSuccessful = AbstractGql.isSuccessful(res);

                        if(isSuccessful) {
                            return res.data;
                        }
                        else {
                            throw new Error('bad request');
                        }
                    })
                );
            request$.subscribe({
                next: data => {
                    resolve(data);
                },
                error: err => {
                    reject(err)
                }
            });
        })
    }
}
