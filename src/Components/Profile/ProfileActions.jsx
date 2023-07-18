const ProfileActions = ({logout}) => {

    function handleLogOutClick(){
        if(window.confirm ('Are you sure?')){
           logout() 
        } 
    }
    function handleClearHistoryClick(){
        alert("Not implemented yet")

    }

    return (
        <>
        <button onClick={handleClearHistoryClick}style={{marginLeft: "5%"}}>Clear History</button>
        <button onClick={handleLogOutClick} style={{marginLeft: "65%"}}>Log Out</button>

        </>
    )
} 

export default ProfileActions