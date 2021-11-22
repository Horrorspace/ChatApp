import React from 'react';
import {ContactCards} from '@ui/components/contacts/ContactCards'
import {SearchField} from '@ui/components/contacts/SearchField'



export const ContactsPage: React.FC = () => {
    
    return (
        <>
            <SearchField />
            <ContactCards />
        </>
    )
}