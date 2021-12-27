import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {GoogleAuth} from '@ui/components/auth/GoogleAuth';
import {SignIn} from '@ui/components/auth/SignIn';
import {AMember} from '@ui/components/auth/AMember';
import {inputChangeHandler, btnClickHandler} from '@aliases/ui';
import {ILogin} from '@interfaces/IAuth';
import {LoginDto} from '@core/dto/login.dto';
import {IRootState} from '@interfaces/IStore';
import {AuthActions} from '@store/actions/AuthActions';



interface AuthState {
    login: string;
    password: string;
}


export const AuthPage: React.FC = () => {
    const initialState: AuthState = {
        login: '',
        password: ''
    };
    const [state, setState] = useState<AuthState>(initialState);
    const dispatch = useDispatch();
    const user = useSelector<IRootState>(state => state.Auth.user);
    console.log(user);
    
    const loginHandler: inputChangeHandler = (e) => {
        const target = e.target as HTMLInputElement;
        const login: string = target.value;
        setState(prev => ({
            ...prev,
            login 
        }));
    }
    
    const passwordHandler: inputChangeHandler = (e) => {
        const target = e.target as HTMLInputElement;
        const password: string = target.value;
        setState(prev => ({
            ...prev,
            password 
        }));
    }
    
    const signInHandler: btnClickHandler = (e) => {
        const {login, password} = state;
        const data: ILogin = new LoginDto(login, password);
        dispatch(AuthActions.loginThunk(data));
        setState(initialState);
    }
    
    
    return (
        <div
            className="auth"
        >
            <GoogleAuth 
                aMember={true}
            />
            <SignIn
                login={state.login}
                password={state.password}
                onLoginChange={loginHandler}
                onPasswordChange={passwordHandler}
                onSignInClick={signInHandler}                
            />
            <AMember 
                aMember={true}
            />
        </div>
    )
}
