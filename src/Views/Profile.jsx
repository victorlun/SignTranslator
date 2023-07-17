import ProfileActions from "../Components/Profile/ProfileActions"
import ProfileHeader from "../Components/Profile/ProfileHeader"
import ProfileTranslateHistory from "../Components/Profile/ProfileTranslateHistory"
import { useUser } from "../Context/UserContext"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import {withAuth} from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
function Profile () {

    const { user, setUser } = useUser()
    const logout = () => {
        storageSave(STORAGE_KEY_USER, null)
        setUser(null)
    }
    return(
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions logout={logout}/>
        <ProfileTranslateHistory translations={user.translations}/>

        </>
    )




}

export default withAuth(Profile)