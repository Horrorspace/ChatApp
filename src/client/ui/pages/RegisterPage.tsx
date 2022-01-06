import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {GoogleAuth} from '@ui/components/auth/GoogleAuth';
import {SignUp} from '@ui/components/auth/SignUp';
import {AMember} from '@ui/components/auth/AMember';
import {IRootState} from '@interfaces/IStore';
import {IUser} from '@interfaces/IUser';
import {IRegister} from '@interfaces/IAuth';
import {RegisterDto} from '@core/dto/register.dto';
import {AuthActions} from '@store/actions/AuthActions';
import {inputChangeHandler, btnClickHandler} from '@aliases/ui';


interface RegisterState {
    username: string;
    email: string;
    password: string;
}


export const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const initialState: RegisterState = {
        username: '',
        email: '',
        password: ''
    };
    const [state, setState] = useState<RegisterState>(initialState);
    const users = useSelector<IRootState, IUser[]>(state => state.Users);
    
    const usernameHandler: inputChangeHandler = (e) => {
        const target = e.target as HTMLInputElement;
        const username: string = target.value;
        setState(prev => ({
            ...prev,
            username 
        }));
    }

    const emailHandler: inputChangeHandler = (e) => {
        const target = e.target as HTMLInputElement;
        const email: string = target.value;
        setState(prev => ({
            ...prev,
            email 
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
    
    const signUpHandler: btnClickHandler = (e) => {
        const {username, email, password} = state;
        if(users.filter(user => user.email === email).length === 0) {
            const data: IRegister = new RegisterDto(email, password, username);
            dispatch(AuthActions.registerThunk(data));
            setState(initialState);
            const path = '/login';
            history.push(path);
            history.goForward();
        }
    }

    const handleMemberClick: btnClickHandler = () => {
        const path = '/login';
        history.push(path);
        history.goForward();
    }


    return (
        <div
            className="auth"
        >
            <GoogleAuth 
                aMember={false}
            />
            <SignUp 
                email={state.email}
                username={state.username}
                password={state.password}
                onUsernameChange={usernameHandler}
                onEmailChange={emailHandler}
                onPasswordChange={passwordHandler}
                onSignUpClick={signUpHandler} 
            />
            <AMember 
                aMember={false}
                onBtnClick={handleMemberClick}
            />
        </div>
    )
}