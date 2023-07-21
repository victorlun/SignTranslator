import React, { useState, useContext } from "react"
import TranslatedField from "./TranslatedField"
import * as Images from "./imageIndex.js"
import { patchTranslation } from "../../api/translation"
import { UserContext } from "../../Context/UserContext"
import { storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

function TranslateForm() {
  const [text, setText] = useState("")
  const [, setTranslation] = useState([])
  const [imageTranslation, setImageTranslation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { user, setUser } = useContext(UserContext)

  async function handleTranslate() {
    setIsLoading(true) // set loading to true
    const textArray = text.toLowerCase().split("")
    const textstring = text
    let charImages = []

    for (let i = 0; i < textArray.length; i++) {
      if (Images[textArray[i]]) {
        charImages.push(Images[textArray[i]])
      }
    }

    setImageTranslation(charImages)
    setTranslation(textstring)

    const data = await patchTranslation(user, textstring)

    if (data) {
      let updatedTranslations = [...user.translations, textstring]

      // limit to the last 10 translations
      if (updatedTranslations.length > 10) {
        updatedTranslations = updatedTranslations.slice(
          updatedTranslations.length - 10
        )
      }

      const updatedUser = {
        ...user,
        translations: updatedTranslations,
      }
      setUser(updatedUser)
      storageSave(STORAGE_KEY_USER, updatedUser)
    }
    setIsLoading(false) // set loading to false
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={(element) => setText(element.target.value)}
        placeholder="Write the text you want to translate here..."
        style={{
          width: "60.8%",
          height: "150px",
          marginBottom: "20px",
          marginLeft: "20%",
          marginRight: "20%",
          fontSize: "22px",
          resize: "none",
        }}
      />
      <button
        onClick={handleTranslate}
        disabled={isLoading}
        style={{ marginBottom: "20px", marginTop: "5px", marginLeft: "69%" }}
      >
        {isLoading ? "Translating..." : "Translate"}
      </button>
      <TranslatedField imageTranslation={imageTranslation} />
    </div>
  )
}

export default TranslateForm
