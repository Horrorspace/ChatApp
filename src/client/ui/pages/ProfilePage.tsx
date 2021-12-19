import React, {} from 'react';
import {Chat} from '@lang/en/Chat';
import {Profile} from '@ui/components/profile/Profile';
import {ProfileMenu} from '@ui/components/profile/ProfileMenu';
import {IInfoFieldProps} from '@interfaces/IProps';
import {InfoFields} from '@aliases/Profile';
// import {ILogin} from '@interfaces/IAuth';



export const ProfilePage: React.FC = () => {
    // useEffect(() => {
    //     const dispatch = useDispatch();
    //     const store = useSelector(state => state);
    //     const login: ILogin = {
    //         email: "tester3111@test.com",
    //         password: "1111"
    //     }
    
    //     console.log(store);
    //     dispatch(AuthActions.setToken('1526236232'));
    //     console.log(store);
    //     dispatch(AuthActions.loginThunk(login));
    
    //     setTimeout(() => {
    //         console.log(store);
    //     }, 5000)
    // }, [])

    // useEffect(() => {
    //     const store = useSelector(state => state);
    //     console.log(store);
    // }, [])

    
    const avatarSrc: string = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album"
    const username: string ="Just for lulz";
    const email: string = "justforlulz@google.com";
    const usernameField: IInfoFieldProps = {
        title: `${Chat.username}:`,
        value: username
    }
    const emailField: IInfoFieldProps = {
        title: `${Chat.email}:`,
        value: email
    }
    const infoFields: InfoFields = [usernameField, emailField];

    
    return (
        <>
            <ProfileMenu />
            <Profile 
                src={avatarSrc}
                infoFields={infoFields}
            />
        </>
    )
}
