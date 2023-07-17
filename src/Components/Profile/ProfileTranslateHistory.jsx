import ProfileTranslationItem from './ProfileTranslationItem';

const ProfileTranslateHistory = ({translations = []}) => {
    const translationList = translations.map(
        (translation, index) => 
        <ProfileTranslationItem key={index} translation={translation}/>
    );
    
    return (
        <section>
            <h4>Translation History</h4>
            <ul>
                {translationList}
            </ul>
            <p>Funkar detta?</p>
        </section>
    )
} 

export default ProfileTranslateHistory
