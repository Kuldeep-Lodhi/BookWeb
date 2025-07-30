import "./MainDiv02.css"

function MainDiv02() {
    const style = {
        height: "100vh",
        width: "100%",
        backgroundImage: "url(../src/assets/Background.png)",
        boxShadow: "inset 0px 0px 20px black,inset 0px 0px 40px black,inset 0px 0px 80px black ,inset 0px 0px 120px black",
        marginTop:"0.2em",


    }
    return (
        <>
            <div style={style} >

                <h2 id="headinginsideDiv">All Catogries</h2>
                <div className="itemcontainer">


                    <div className="parentdiv">
                        <div className="Child01 hover">Fiction Books  </div>
                        <div className="Child02 hover">Non-Fiction Books</div>
                        <div className="Child03 hover">Academic & Educational Books</div>
                        <div className="Child04 hover">Children’s Books</div>
                        <div className="Child05 hover">Comics & Graphic Novels</div>
                        <div className="Child06 hover">Poetry & Drama</div>
                        <div className="Child07 hover">Religious & Spiritual Books</div>
                        <div className="Child08 hover">Art, Photography & Design</div>
                        <div className="Child09 hover">Cookbooks & Food</div>
                        <div className="Child010 hover">Diaries, Journals & Logs</div>
                    </div>

                </div>
                {/* <SplineBg/> */}
            </div>
        </>
    )
}
export default MainDiv02