import React, { useState } from 'react';
import TranslatedField from './TranslatedField';

function TranslateForm() {
    const [text, setText] = useState('');
    const [translation, setTranslation] = useState('');

    const handleTranslate = () => {
        // Translation logic goes here
        const translatedText = text; // to be replace with actual translation
        setTranslation(translatedText);
    };

    return (
        <div>
            <textarea 
                value={text} 
                onChange={element => setText(element.target.value)} 
                placeholder='Write the text you want to translate here...'
                style={{ width: '1000px', height: '150px', marginBottom: '20px', marginLeft: '100px' }}
            />
            <button onClick={handleTranslate} style={{ marginBottom: '20px', marginTop: "5px", marginLeft: "100px"}}>
                Translate
            </button>
            <TranslatedField translation={translation} />
        </div>
    );
}

export default TranslateForm;
