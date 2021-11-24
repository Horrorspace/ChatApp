import React, {useState} from 'react';
import {Row, Col, Input, Button, Dropdown, Menu, Typography, Modal} from 'antd';
import {SearchOutlined, SettingOutlined, UserAddOutlined, CloseOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => { 
    const {Paragraph} = Typography;
    const [settings, setSettings] = useState(false);
    const [add, setAdd] = useState(false);

    const closeIco: React.ReactElement = (
        <CloseOutlined 
            className="add-modal__close-ico"
        />
    );

    const modalFooter: React.ReactElement = (
        <Row>
            <Col>
                <Button
                    type="primary"
                >
                    {Chat.ok}
                </Button>
            </Col>
            <Col>
                <Button
                    type="default"
                    onClick={() => {setAdd(false)}}
                >
                    {Chat.cancel}
                </Button>
            </Col>
        </Row>
    );
    
    const addModal: React.ReactElement = (
        <Modal
            title={Chat.addUserTitle}
            visible={add}
            onCancel={() => {setAdd(false)}}
            closeIcon={closeIco}
            footer={modalFooter}
            className=""
            wrapClassName=""
        >
            <Input 
                placeholder={Chat.addUserPlaceholder}
                className=""
            />
        </Modal>
    )
    
    const menu: React.ReactElement = (
        <Menu
            className="settings-menu-list"
        >
            <Menu.Item
               className="settings-menu-item__wrap" 
            >
                <Paragraph
                    className="settings-menu-item"
                >
                    {"test"}
                </Paragraph>
            </Menu.Item>
            <Menu.Item
               className="settings-menu-item__wrap" 
            >
                <Paragraph
                    className="settings-menu-item"
                >
                    {"test"}
                </Paragraph>
            </Menu.Item>
            <Menu.Item
               className="settings-menu-item__wrap" 
            >
                <Paragraph
                    className="settings-menu-item"
                >
                    {"test"}
                </Paragraph>
            </Menu.Item>
        </Menu>
    );
    
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
                    className="setting-ico__wrap"
                >
                    <Button
                        className="setting-btn"
                        onClick={() => {setSettings(p => !p)}}
                    >
                        <Dropdown
                            overlay={menu}
                            className="setting-btn"
                            visible={settings}
                        >
                            <SettingOutlined 
                                className="setting-ico"
                            />
                        </Dropdown>
                    </Button>
                </Col>
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
                <Col
                    className="add-ico__wrap"
                >
                    <Button
                        className="add-btn"
                        onClick={() => {setAdd(p => !p)}}
                    >
                        <UserAddOutlined 
                            className="add-ico"
                        />
                    </Button>
                </Col>
            </Row>

            {addModal}
        </section>
    )
}

export const SearchField = React.memo(Component);