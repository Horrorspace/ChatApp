import React from 'react';
import {Row, Col, Input, Typography} from 'antd';
import {IPassFieldProps} from '@interfaces/IProps'


const Component: React.FC<IPassFieldProps> = ({title, placeholder, forgotPassTitle}: IPassFieldProps) => {
    const {Title, Paragraph} = Typography;
    const forgotPass: React.ReactElement = forgotPassTitle ? <Col>{forgotPassTitle}</Col> : <></>

    return (
        <>
            <Row
                align="middle"
                justify="center"
            >
                <Col>
                    <Title level={4}>{title}</Title>
                </Col>
                <Col>
                    <Paragraph>{forgotPass}</Paragraph>
                </Col>
            </Row>
            <Row
                align="middle"
                justify="center"    
            >
                <Input.Password
                    placeholder={placeholder}
                />
            </Row>
        </>
    )
}

export const PassField = React.memo(Component);