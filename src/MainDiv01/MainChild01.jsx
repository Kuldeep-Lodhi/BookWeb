import "./MainChild01.css"
function MainChild01(){
    console.log("work")
    return(
        <>
            
        <div className="itemscontainer">
            <div id="main">Book</div>
            <div className="text01">Where Every Page Opens a <br></br><span>New World</span></div>
            <h2 className="text02">Books are more than ink and paper — they’re time machines, teleportation devices, and keys to universes unknown. 
                In just a few pages, you can travel centuries, explore galaxies. </h2>
            
            <div className="button-wrapper">
                <button className="button01">Explore Books</button>
            <button className="button02">Join us</button>
            </div>
            
        </div>
        </>
    )
}
export default MainChild01