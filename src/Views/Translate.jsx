import TranslateForm from "../components/Translate/TranslateForm"
import { withAuth } from "../hoc/withAuth"

function Translate() {
  return (
    <>
      <h1>TRANSLATE</h1>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Here you can translate from English to Sign Language!
      </p>
      <TranslateForm />
      <img
        src="https://i.gifer.com/q7Q.gif"
        alt="lost in translation gif"
        style={{
          marginLeft: "37%",
          marginTop: "15%",
          height: "250px",
          width: "450px",
          opacity: "65%",
          borderRadius: "150px",
        }}
      ></img>
    </>
  )
}

export default withAuth(Translate)
