import React from 'react';
import {Row, Col, Typography} from 'antd';
import {IInfoFieldProps} from '@interfaces/IProps';


const Component: React.FC<IInfoFieldProps> = ({title, value}: IInfoFieldProps) => {
    const {Title, Paragraph} = Typography;

    return (
        <div
            className="profile-info-field"
        >
            <Row
                align="middle"
                justify="center"
                className="profile-info-title__main-wrap" 
            >
                <Col
                    className="profile-info-title__wrap"     
                >
                    <Title 
                        level={3}
                        className="profile-info-title"
                     >
                        {title}
                    </Title>
                </Col>
            </Row>
            <Row
                align="middle"
                justify="center"
                className="profile-info-value__main-wrap"
            >
                <Col
                    className="profile-info-value__wrap"    
                >
                    <Paragraph
                        className="profile-info-value" 
                    >
                        {value}
                    </Paragraph>
                </Col>
            </Row>
        </div>
    )
}

export const InfoField = React.memo(Component);
