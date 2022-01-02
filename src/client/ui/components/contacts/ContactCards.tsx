import React from 'react';
import {ContactCard} from '@ui/components/contacts/ContactCard';
import {IContactCardsProps} from '@interfaces/IProps';


const Component: React.FC<IContactCardsProps> = ({
    cards
}: IContactCardsProps) => {
    const contactCards: React.ReactElement[] = cards.map(card => 
        <ContactCard 
            {...card}
        />
    )

    return (
        <section
            className="contact-cards__wrap"
        >
            <div
                className="contact-cards"
            >
                {contactCards}
            </div>
        </section>
    )


    // const avatarSrc: string = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album";
    // const userAvatarSrc: string = "https://sun9-20.userapi.com/impg/t062bKv86xwGI1wrgDBjs2_XePZhfAF74SrULw/UcIyPrvXlVo.jpg?size=1079x1079&quality=96&sign=f4a8be9f66adc2c3e8c538548e28f8a4&type=album";
    // const messageTest: string = 'Five Five Five Five...';

    // return (
    //     <section
    //         className="contact-cards__wrap"
    //     >
    //         <div
    //             className="contact-cards"
    //         >
    //             <ContactCard 
    //                 username="Just for lulz"
    //                 avatarSrc={avatarSrc}
    //                 userAvatarSrc={userAvatarSrc}
    //                 lastMessageFromUserId={10}
    //                 userId={8}
    //                 online={true}
    //                 lastMessage={messageTest}
    //                 timeOfLastMessage={new Date('November 14, 2021 19:28:00')}
    //             />
    //             <ContactCard 
    //                 username="Just for lulz"
    //                 avatarSrc={avatarSrc}
    //                 userAvatarSrc={userAvatarSrc}
    //                 lastMessageFromUserId={10}
    //                 userId={8}
    //                 online={true}
    //                 lastMessage="Five"
    //                 timeOfLastMessage={new Date('November 14, 2021 19:28:00')}
    //             />
    //             <ContactCard 
    //                 username="Just for lulz"
    //                 avatarSrc={avatarSrc}
    //                 userAvatarSrc={userAvatarSrc}
    //                 lastMessageFromUserId={10}
    //                 userId={8}
    //                 online={true}
    //                 lastMessage="Five"
    //                 timeOfLastMessage={new Date('November 14, 2021 19:28:00')}
    //             />
    //         </div>
    //     </section>
    // )
}

export const ContactCards = React.memo(Component);