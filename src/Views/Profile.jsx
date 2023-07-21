import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslateHistory from "../components/Profile/ProfileTranslateHistory"
import { useUser } from "../Context/UserContext"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { withAuth } from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
function Profile() {
  const { user, setUser } = useUser()

  const logout = () => {
    storageSave(STORAGE_KEY_USER, null)
    setUser(null)
  }
  return (
    <>
      <ProfileHeader username={user.username} />
      <ProfileActions logout={logout} />
      <ProfileTranslateHistory translations={user.translations} />
      <img
        src="https://i.gifer.com/q7Q.gif"
        alt="lost in translation gif" className="center"
        style={{
          marginTop: "140px",
          height: "250px",
          width: "450px",
          opacity: "65%",
          borderRadius: "150px",
        }}
      ></img>
    </>
  )
}

export default withAuth(Profile)
