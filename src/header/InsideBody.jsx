import Login from "../Authentication/Login"
import "./InsideBody.css"
function InsideBody() {

    return (
        <>
          <div id="parent">
            <div className="logo">📚</div>
            <input type="text" className="searchbar" placeholder="Search books..." />

            <ul className="options">
                <li><a href="#main">Home</a></li>
                <li><a href="#Child01">Books</a></li>
                <li><a href="#headinginsideDiv">Catogries</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#about-heading">About</a></li>
                <li><a href="#divContainer">Network</a></li>
                {/* <li><a href="#login-container">{<Login/>}</a></li> */}

            </ul>
            
           </div> 
            
        </>
    )
}
export default InsideBody