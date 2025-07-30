import SplineBg02 from "../component/SplineBg02"
import "./MainDiv03.css"
function MainDiv03() {
    const style = {
        height: "100vh",
        width: "100%",
        backgroundColor: "yellow",
        color:"white",
        position:"relative"

}
return (
    <>
        <div style={style} >
          <div id="divContainer"> 
          <SplineBg02/>
          </div>
          <div className="Divson01">
            
            <div id="divText">In the digital world, your network is your net worth. Our platform offers tools and opportunities to build strong, reliable connections — tailored to your interests, expertise,
                 or business goals. Collaborate, grow, and lead — create your <span>network</span> with us.</div>
            <div id="buttonContainer"><button id="button01">Create Network</button>
            <button id="button02">Touch With us</button></div>
           
          </div>
           <div id="cover"> </div>
        </div>
    </>
)
}
export default MainDiv03
