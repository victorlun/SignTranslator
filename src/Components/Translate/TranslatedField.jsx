function TranslatedField({ translation }) {
    return (
        <div>
            <textarea 
                value={translation} 
                readOnly
                style={{ width: '1000px', height: '150px', marginLeft: "100px"}}
            />
        </div>
    );
}

export default TranslatedField;
