import React from 'react';
import {Row, Col, Button, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IAMemberProps} from '@interfaces/IProps'


const Component: React.FC<IAMemberProps> = ({aMember}: IAMemberProps) => {
    const {Title} = Typography;

    const signInTitle: string = `${Chat.notAMember}? ${Chat.signUp} ${Chat.now}:`;
    const signUpTitle: string = `${Chat.alreadyAMember}? ${Chat.signIn}:`;
    const title: string = aMember ? signInTitle : signUpTitle;

    const signInButton: string = Chat.signUp;
    const signUpButton: string = Chat.signIn;
    const buttonText: string = aMember ? signInButton : signUpButton;

    return (
        <section
            className="member__wrap"
        >
            <div
                className="member"
            >
                <Row
                    align="middle"
                    justify="center"
                    className="member-title__wrap" 
                >
                    <Col>
                        <Title 
                            level={4}
                            className="member-title"
                        >
                            {title}
                        </Title>
                    </Col>
                </Row>
                <Row
                    align="middle"
                    justify="center"
                    className="member-btn__wrap" 
                >
                    <Col>
                        <Button
                            className="member-btn"
                        >
                            {buttonText}
                        </Button>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export const AMember = React.memo(Component);