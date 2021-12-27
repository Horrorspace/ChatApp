import React from 'react';
import {Row, Col, Input, Typography} from 'antd';
import {IPassFieldProps} from '@interfaces/IProps';


const Component: React.FC<IPassFieldProps> = ({title, placeholder, forgotPassTitle, value, onChange}: IPassFieldProps) => {
    const {Title, Link} = Typography;
    const forgotPass: React.ReactElement = forgotPassTitle ? <Col>{forgotPassTitle}</Col> : <></>

    return (
        <>
            <Row
                align="middle"
                justify="center"
                className="password-field-title__main-wrap"
            >
                <Col
                    className="password-field-title__wrap"
                >
                    <Title 
                        level={4}
                        className="password-field-title"
                    >
                        {title}
                    </Title>
                </Col>
                <Col
                    className="forgot-password__wrap"
                >
                    <Link
                        className="forgot-password"
                    >
                        {forgotPass}
                    </Link>
                </Col>
            </Row>
            <Row
                align="middle"
                justify="center"
                className="password-field-input__main-wrap"    
            >
                <Col
                    className="password-field-input__wrap"
                >
                    <Input.Password
                        placeholder={placeholder}
                        className="password-field-input"
                        value={value}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </>
    )
}

export const PassField = React.memo(Component);
