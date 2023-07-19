import React, { useState, useEffect, useContext } from 'react';
import TranslatedField from './TranslatedField';
import * as Images from './imageIndex.js'
import { patchTranslation } from '../../api/translation';
import { UserContext } from '../../Context/UserContext';




function TranslateForm() {
    const [text, setText] = useState('');
    const [translation, setTranslation] = useState([]);
    const [apiText, setApiText] = useState('')
    const { user } = useContext(UserContext);


    const handleTranslate = () => {
        const textArray = text.toLowerCase().split('');
        let charImages = [];

        for(let i = 0; i < textArray.length; i++){
            if (Images[textArray[i]]) {
                charImages.push(Images[textArray[i]]);
            }
        }
        setTranslation(charImages);
        setApiText(text)
        
    };

    // Calling postTranslation when translation changes
    useEffect(() => {
        if (apiText.length > 0) {

            patchTranslation(user, apiText);
        }
    }, [apiText, user]);

    return (
        <div>
            <textarea 
                value={text} 
                onChange={element => setText(element.target.value)} 
                placeholder='Write the text you want to translate here...'
                style={{ width: '60.8%', height: '150px', marginBottom: '20px', marginLeft: "20%", marginRight: "20%", 
                fontSize: "22px", resize: "none" }}
            />
            <button onClick={handleTranslate} style={{ marginBottom: '20px', marginTop: "5px", marginLeft: "69%"}}>
                Translate
            </button>
            <TranslatedField translation={translation} />
        </div>
    );
}

export default TranslateForm;
