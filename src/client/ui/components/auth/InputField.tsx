import React from 'react';
import {Row, Col, Input} from 'antd';
import {IInputFieldProps} from '@interfaces/IProps'


const Component: React.FC<IInputFieldProps> = ({title, placeholder}: IInputFieldProps) => {

    return (
        <>
            <Row
                align="middle"
                justify="center"
            >
                <Col>
                    {title}
                </Col>
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