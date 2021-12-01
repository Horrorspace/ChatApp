import React from 'react';
import {InfoList} from '@ui/components/profile/InfoList';
import {Avatart} from '@ui/components/profile/Avatart';
import {IProfileProps} from '@interfaces/IProps';


const Component: React.FC<IProfileProps> = ({src, infoFields}: IProfileProps) => {
    return (
        <section
            className="profile__wrap"  
        >
            <Avatart 
                src={src}
            />
            <InfoList 
                infoFields={infoFields}
            />
        </section>
    )
}

export const Profile = React.memo(Component);
