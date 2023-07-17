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
                onChange={e => setText(e.target.value)} 
                placeholder='Write your text here...'
                style={{ width: '80%', height: '150px', marginBottom: '20px', marginLeft: '50px' }}
            />
            <button onClick={handleTranslate} style={{ marginBottom: '20px', marginTop: "100px" }}>
                Translate
            </button>
            <TranslatedField translation={translation} />
        </div>
    );
}

export default TranslateForm;
