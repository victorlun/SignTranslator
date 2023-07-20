import { createHeaders } from "./index"

export const getApiId = async (user) => {
  const API_URL = `${process.env.REACT_APP_API_URL}?username=${user.username}`
  const response = await fetch(API_URL, {
    method: "GET",
    headers: createHeaders(),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const data = await response.json()
  const id = data[0].id
  return id
}

export const clearTranslation = async (user) => {
  const API_URL = process.env.REACT_APP_API_URL
  const id = await getApiId(user)

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: createHeaders(),
    body: JSON.stringify({
      translations: [],
    }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  } else {
    return await response.json()
  }
}

export const patchTranslation = async (user, translation) => {
  const API_URL = process.env.REACT_APP_API_URL

  const id = await getApiId(user)
  console.log(id)
  try {
    // Fetch current translations
    const currentResponse = await fetch(`${API_URL}/${id}`, {
      headers: createHeaders(),
    })

    if (!currentResponse.ok) {
      throw new Error(`HTTP error, status = ${currentResponse.status}`)
    }

    const currentUser = await currentResponse.json()
    const currentTranslations = currentUser.translations

    if (currentTranslations.length >= 10) {
      currentTranslations.shift()
    }
    currentTranslations.push(translation)

    // Patch with new translations
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: currentTranslations,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`)
    }

    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message]
  }
}
