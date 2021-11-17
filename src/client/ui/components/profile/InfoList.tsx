import React from 'react';
import {InfoField} from '@ui/components/profile/InfoField';
import {IInfoListProps, IInfoFieldProps} from '@interfaces/IProps';


const Component: React.FC<IInfoListProps> = ({infoFields}: IInfoListProps) => {
    const getFieldElement = ({title, value}: IInfoFieldProps): React.ReactElement => {
        return (
            <InfoField 
                title={title}
                value={value}
            />
        )
    }
    
    const InfoFields: React.ReactElement[] = infoFields.map(getFieldElement);

    return (
        <>
            {InfoFields}
        </>
    )
}

export const InfoList = React.memo(Component)