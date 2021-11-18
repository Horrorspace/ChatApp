import React from 'react';
import {Row, Col, Input, Typography} from 'antd';
import {IInputFieldProps} from '@interfaces/IProps'


const Component: React.FC<IInputFieldProps> = ({title, placeholder}: IInputFieldProps) => {
    const {Title} = Typography;

    return (
        <>
            <Row
                align="middle"
                justify="center"
            >
                <Col>
                    <Title level={4}>{title}</Title>
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