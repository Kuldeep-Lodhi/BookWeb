import MainChild01 from "./MainChild01"
import MainChild02 from "./MainChild02"

function MainDiv01() {
    const style = {
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        
        position:"relative",
        boxShadow: " 0px 0px 20px black,0px 0px 40px black,0px 0px 80px black ",
        
        display:"flex",
        justifyContent:"space-between"


}
return (
    <>
        <div style={style} >
            <MainChild01/>
            <MainChild02/>
        </div>
    </>
)
}
export default MainDiv01