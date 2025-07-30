import style from "../HeaderBody.module.css"
import InsideBody from "./InsideBody"
function HeaderBody() {

    return (
        <>
            <nav className={style.navbar}>
                <InsideBody/>
            </nav>
        </>
    )
}
export default HeaderBody