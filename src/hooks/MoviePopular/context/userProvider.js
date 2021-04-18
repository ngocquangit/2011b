import MovieContext from './index';
const UserProFileProvider = (props) =>{
    const infoUser = {
        id:1, 
        name:"Quang",
        email:"quang@gmail.com",
        avatar: 'https://scontent.fhan2-6.fna.fbcdn.net/v/t1.6435-9/163107805_1401373873529097_8092116525849390823_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CJKxFJMxuWUAX_X9WJ0&_nc_ht=scontent.fhan2-6.fna&oh=4cbbfb69f16aae0ab3e409c1b76d0c45&oe=60980710'
    }
    return(
        <MovieContext.Provider value={infoUser}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default UserProFileProvider;