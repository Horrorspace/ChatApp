import React from 'react';
import {Row, Col, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {Contacts} from '@lang/en/Contacts';


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
                    placeholder={Contacts.searchPlaceholder}
                />
            </Col>
        </Row>
    )
}

export const SearchField = React.memo(Component);