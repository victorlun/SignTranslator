import React, { useState } from 'react';
import TranslatedField from './TranslatedField';
import * as Images from './imageIndex.js'

function TranslateForm() {
    const [text, setText] = useState();
    const [translation, setTranslation] = useState();
    //const [image, setImage] = useState()



    const handleTranslate = () => {
        const textArray = text.toLowerCase().split('');
        let charImages = [];
        console.log(textArray);
        for(let i = 0; i < textArray.length; i++){
            if (Images[textArray[i]]) {
                charImages.push(Images[textArray[i]]);
            }
        }
        console.log(charImages);
    
        const translatedText = charImages;
        setTranslation(translatedText);
    };
    
    return (
        <div>
            <textarea 
                value={text} 
                onChange={element => setText(element.target.value)} 
                placeholder='Write the text you want to translate here...'
                style={{ width: '60%', height: '150px', marginBottom: '20px', marginLeft: "20%", marginRight: "20%", fontSize: "28px", fontfamily: "monospace"}}
            />
            <button onClick={handleTranslate} style={{ marginBottom: '20px', marginTop: "5px", marginLeft: "65%"}}>
                Translate
            </button>
            <TranslatedField translation={translation} />
        
        </div>
    );
}

export default TranslateForm;
