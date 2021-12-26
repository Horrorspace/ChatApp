import React, {useState} from 'react';
import {Row, Col, Input, Button, Dropdown, Menu, Typography, Modal} from 'antd';
import {SearchOutlined, SettingOutlined, UserAddOutlined, CloseOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => { 
    const {Title, Paragraph} = Typography;
    const [settings, setSettings] = useState(false);
    const [add, setAdd] = useState(false);

    const closeIco: React.ReactElement = (
        <CloseOutlined 
            className="add-modal__close-ico"
        />
    );

    const modalFooter: React.ReactElement = (
        <Row
            justify="end"
            className="add-modal-menu"
        >
            <Col
                className="add-modal-btn__wrap"
            >
                <Button
                    type="primary"
                    className="add-modal-btn_ok"
                >
                    {Chat.ok}
                </Button>
            </Col>
            <Col
                className="add-modal-btn__wrap"
            >
                <Button
                    type="default"
                    className="add-modal-btn_cancel"
                    onClick={() => {setAdd(false)}}
                >
                    {Chat.cancel}
                </Button>
            </Col>
        </Row>
    );

    const modalTitle: React.ReactElement = (
        <div
            className="add-modal-title__wrap"
        >
            <Title
                className="add-modal-title"
            >
                {Chat.addUserTitle}
            </Title>
        </div>
    );
    
    const addModal: React.ReactElement = (
        <Modal
            title={modalTitle}
            visible={add}
            onCancel={() => {setAdd(false)}}
            closeIcon={closeIco}
            footer={modalFooter}
            className="add-modal"
            wrapClassName="add-modal__wrap"
            getContainer={".add-modal__main-wrap"}
        >
            <Input 
                placeholder={Chat.addUserPlaceholder}
                className="add-modal-input"
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
        <>
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
                                className=""
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
            <section 
                className="add-modal__main-wrap"
            />
        </>
    )
}

export const SearchField = React.memo(Component);