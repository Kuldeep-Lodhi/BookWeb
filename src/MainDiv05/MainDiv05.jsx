import "./MainDiv05.css";
function MainDiv05() {
    const style = {
        height: "100vh",
        width: "100%",
        backgroundColor: "lightgreen",

}
return (
    <>
        <div style={style} >
            <div id="slideshow">
  <img src="/Bookimage01.avif" className="slide" />
  <img src="/Bookimage02.avif" className="slide" />
  <img src="/Bookimage03.avif" className="slide" />
  <img src="/Bookimage04.jpg" className="slide" />
</div>

        </div>
    </>
)
}
export default MainDiv05