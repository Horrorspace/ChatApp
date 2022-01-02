import axios, {AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {reqType} from '@api/REST/req-type.enum';
import {config} from '@config/config';


export abstract class AbstractREST {
    protected static headers: AxiosRequestHeaders = {
        'Content-Type': 'application/json'
    }

    protected static readonly protocol: string = config.encryption ? 'https' : 'http';
    protected static readonly baseUrl: string = ``;

    protected static readonly successfulStatuses: number[] = [200, 201];

    protected static isSuccessful(status: number): boolean {
        return AbstractREST.successfulStatuses.some(s => s === status);
    }


    protected static async request<T, R>(type: reqType, url: string, body: T): Promise<AxiosResponse<R>> {
        try {
            const options: AxiosRequestConfig<T> = {
                url,
                method: type,
                data: body,
                headers: AbstractREST.headers
            };
            const res = await axios(options);
            return res;
        }
        catch(error) {
            console.error(error);
            throw error;
        }
    }

    protected static observableRequest<T, R>(type: reqType, url: string, body: T): Observable<AxiosResponse<R>> {
        return new Observable(subscriber => {
            AbstractREST.request<T, R>(type, url, body)
                .then(res => {
                    console.log('res', res);
                    subscriber.next(res);
                    subscriber.complete();
                })
                .catch(err => {
                    console.log('err');
                    subscriber.error(err);
                });
        })
    }
    
    protected static async makeRequest<R, T>(type: reqType, url: string, body: T): Promise<R> {
        return new Promise((resolve, reject) => {
            const request$ = AbstractREST.observableRequest<T, R>(type, url, body)
                .pipe(
                    map<AxiosResponse<R>, R>(res => {
                        const isSuccessful = AbstractREST.isSuccessful(res.status);

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
                    console.error(err);
                    reject(err);
                }
            });
        })
    }
}