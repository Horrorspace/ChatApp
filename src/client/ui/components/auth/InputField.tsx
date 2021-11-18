import React from 'react';
import {Row, Input} from 'antd';
import {IInputFieldProps} from '@interfaces/IProps'


const Component: React.FC<IInputFieldProps> = ({title, placeholder}: IInputFieldProps) => {

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
                <Input 
                    placeholder={placeholder}
                />
            </Row>
        </>
    )
}

export const InputField = React.memo(Component);