function TranslatedField({ translation }) {
    return (
        <div>
            <textarea 
                value={translation} 
                readOnly
                style={{ width: '80%', height: '150px', marginLeft: "50px"}}
            />
        </div>
    );
}

export default TranslatedField;
