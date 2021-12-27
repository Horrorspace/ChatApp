import React from 'react';
import {Row, Col, Input, Typography} from 'antd';
import {IInputFieldProps} from '@interfaces/IProps';


const Component: React.FC<IInputFieldProps> = ({title, placeholder}: IInputFieldProps) => {
    const {Title} = Typography;

    return (
        <>
            <Row
                align="middle"
                justify="center"
                className="input-field-title__main-wrap"
            >
                <Col
                    className="input-field-title__wrap"
                >
                    <Title 
                        level={4}
                        className="input-field-title"
                    >
                        {title}
                    </Title>
                </Col>
            </Row>
            <Row
                align="middle"
                justify="center"
                className="input-field-input__main-wrap"    
            >
                <Col
                    className="input-field-input__wrap"
                >
                    <Input 
                        placeholder={placeholder}
                        className="input-field-input"
                    />
                </Col>
            </Row>
        </>
    )
}

export const InputField = React.memo(Component);
