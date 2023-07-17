import { Link } from "react-router-dom"
const ProfileActions = ({logout}) => {

    function handleLogOutClick(){
        if(window.confirm ('Are you sure?')){
           logout() 
        } 
    }

    return (
            <ul>
                <li><Link to="/translate">Translate</Link></li>
                <li><button>Clear History</button></li>
                <li><button onClick={handleLogOutClick}>Log Out</button></li>

            </ul>
    )
} 

export default ProfileActions