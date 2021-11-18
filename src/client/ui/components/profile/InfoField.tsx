import React from 'react';
import {Row, Col, Typography} from 'antd';
import {IInfoFieldProps} from '@interfaces/IProps';


const Component: React.FC<IInfoFieldProps> = ({title, value}: IInfoFieldProps) => {
    const {Title, Paragraph} = Typography;

    return (
        <>
            <Row
                align="middle"
                justify="center"
            >
                <Col>
                    <Title level={3}>{title}</Title>
                </Col>
            </Row>
            <Row
                align="middle"
                justify="center"
            >
                <Col>
                    <Paragraph>{value}</Paragraph>
                </Col>
            </Row>
        </>
    )
}

export const InfoField = React.memo(Component);