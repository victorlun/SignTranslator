import ProfileTranslationItem from './ProfileTranslationItem';

const ProfileTranslateHistory = ({translations}) => {
    const translationList = translations.map(
        (translation, index) => 
        <ProfileTranslationItem key={index} translation={translation}/>
    );
    function logTranslations (){
        console.log(translations)
    }

    return (
        <section>
            <h4>Translation History</h4>
            <ul>
                <button onClick={logTranslations}>click</button>
                {translationList}
            </ul>
  
        </section>
    )
} 

export default ProfileTranslateHistory
