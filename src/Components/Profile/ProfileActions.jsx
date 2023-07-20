import { useContext } from "react"
import { clearTranslation } from "../../api/translation"
import { UserContext } from "../../context/UserContext"

const ProfileActions = ({ logout }) => {
  const { user, setUser } = useContext(UserContext)

  function handleLogOutClick() {
    if (window.confirm("Are you sure?")) {
      logout()
    }
  }

  async function handleClearHistoryClick() {
    await clearTranslation(user)
    setUser({
      ...user,
      translations: [],
    })
  }

  return (
    <>
      <button onClick={handleClearHistoryClick} style={{ marginLeft: "5%" }}>
        Clear History
      </button>
      <button onClick={handleLogOutClick} style={{ marginLeft: "65%" }}>
        Log Out
      </button>
    </>
  )
}

export default ProfileActions
