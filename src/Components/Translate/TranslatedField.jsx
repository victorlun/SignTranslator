function TranslatedField({ translation }) {
    return (
        <div style={{borderRadius: "20px",backgroundColor: 'white', display: 'flex', flexWrap: 'wrap', border: '1px solid #FFF', minHeight: '150px', padding: '5px', width: '60%', marginLeft: "20%", marginRight: "20%"}}>
            {translation && translation.map((image, index) => (
                <img key={index} src={image} alt="translated-text" />
            ))}
        </div>
    );
}

export default TranslatedField;
