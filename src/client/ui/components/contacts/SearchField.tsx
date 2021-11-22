import React from 'react';
import {Row, Col, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => { 
    return (
        <section
            className="search-field__wrap"
        >
            <Row
                align="middle"
                justify="center"
                className="search-field"
            >
                <Col
                    className="search-ico__wrap"
                >
                    <SearchOutlined 
                        className="search-ico"
                    />
                </Col>
                <Col
                    className="search__wrap"
                >
                    <Input 
                        placeholder={Chat.searchPlaceholder}
                        className="search"
                    />
                </Col>
            </Row>
        </section>
    )
}

export const SearchField = React.memo(Component);