import React from 'react';
import {Row, Col, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';


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
                    placeholder={Chat.searchPlaceholder}
                />
            </Col>
        </Row>
    )
}

export const SearchField = React.memo(Component);