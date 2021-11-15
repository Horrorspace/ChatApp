import React from 'react';
import {Row, Col, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {Сhat} from '@lang/en/Сhat';


const Component: React.FC = () => { 
    return (
        <Row
        align="middle"
        justify="center"
        >
            <Col>
                <SearchOutlined />
            </Col>
            <Col>
                <Input 
                    placeholder={Сhat.searchPlaceholder}
                />
            </Col>
        </Row>
    )
}

export const SearchField = React.memo(Component);