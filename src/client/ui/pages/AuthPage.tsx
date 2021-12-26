import React from 'react';
import {GoogleAuth} from '@ui/components/auth/GoogleAuth';
import {SignIn} from '@ui/components/auth/SignIn';
import {AMember} from '@ui/components/auth/AMember';


export const AuthPage: React.FC = () => {

    return (
        <div
            className="auth"
        >
            <GoogleAuth 
                aMember={true}
            />
            <SignIn />
            <AMember 
                aMember={true}
            />
        </div>
    )
}