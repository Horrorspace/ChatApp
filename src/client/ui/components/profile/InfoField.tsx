import React from 'react';
import {Row} from 'antd';
import {IInfoFieldProps} from '@interfaces/IProps';


const Component: React.FC<IInfoFieldProps> = ({title, value}: IInfoFieldProps) => {

    return (
        <>
            <Row
                align="middle"
                justify="center"
            >
                {title}
            </Row>
            <Row
                align="middle"
                justify="center"
            >
                {value}
            </Row>
        </>
    )
}

export const InfoField = React.memo(Component);