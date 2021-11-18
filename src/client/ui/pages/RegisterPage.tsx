import React from 'react';
import {GoogleAuth} from '@ui/components/auth/GoogleAuth';
import {SignUp} from '@ui/components/auth/SignUp';
import {AMember} from '@ui/components/auth/AMember';


export const RegisterPage: React.FC = () => {

    return (
        <>
            <GoogleAuth 
                aMember={false}
            />
            <SignUp />
            <AMember 
                aMember={false}
            />
        </>
    )
}