import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {GoogleAuth} from '@ui/components/auth/GoogleAuth';
import {SignIn} from '@ui/components/auth/SignIn';
import {AMember} from '@ui/components/auth/AMember';
import {inputChangeHandler, btnClickHandler} from '@aliases/ui';


interface AuthState {
    login: string;
    password: string;
}


export const AuthPage: React.FC = () => {
    const initialState: AuthState = {
        login: '';
        password: '';
    };
    const [state, setState] = useState<AuthState>(initialState);
    const dispatch = useDispatch();
    
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
                onLoginChange={}
                onPasswordChange={}
                onSignInClick={}                
            />
            <AMember 
                aMember={true}
            />
        </div>
    )
}
