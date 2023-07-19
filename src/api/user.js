import { createHeaders } from "./index"

const API_URL = process.env.REACT_APP_API_URL

export const checkForUser = async (username) => {
  try {
    const response = await fetch(`${API_URL}?username=${username}`)
    if (!response.ok) {
      throw new Error("Could not complete request")
    }
    const data = await response.json()
    return [null, data]
  } catch (error) { 
    return [error.message]
  }
}

const createUser = async (username) => {
  try {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: createHeaders(),
        body: JSON.stringify({
            username, 
            translations: []
        })
    })
    if (!response.ok) {
      throw new Error("Could not create new user with username " + username)
    }
    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message]
  }
}

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username)
  
  if(checkError !== null){
    return [checkError, null]
  }
  if (user.length > 0) {
    return [null, user.pop()]
  }

  return await createUser(username)
}
