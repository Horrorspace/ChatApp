import React from 'react';
import {Row, Col, Input} from 'antd';
import {IPassFieldProps} from '@interfaces/IProps'


const Component: React.FC<IPassFieldProps> = ({title, placeholder, forgotPassTitle}: IPassFieldProps) => {
    const forgotPass: React.ReactElement = forgotPassTitle ? <Col>{forgotPassTitle}</Col> : <></>

    return (
        <>
            <Row
                align="middle"
                justify="center"
            >
                <Col>
                    {title}
                </Col>
                {forgotPass}
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

export const PassField = React.memo(Component);