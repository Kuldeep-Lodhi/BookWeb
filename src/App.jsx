import "./App.css"
import HeaderBody from "./header/HeaderBody"
import MainDiv01 from "./MainDiv01/MainDiv01"
import MainDiv02 from "./MainDiv02/MainDiv02"
import MainDiv03 from "./MainDiv03/MainDiv03"
import MainDiv04 from "./MainDiv04/MainDiv04"

import MainDiv05 from "./MainDiv05/MainDiv05"
import MainDiv06 from "./MainDiv06/MainDiv06"
import Login from "./Authentication/Login"
import Signin from "./Authentication/Signin"
import Signlogic from "./Authentication/Signlogic"

function App(){
  return (
    <>
    <HeaderBody/>
    <MainDiv01/>
    <MainDiv02/>
    <MainDiv03/>
    <MainDiv04/>
    <MainDiv05/>
    <MainDiv06/>
    {/* <Login/>
    <Signin/> */}
    {/* <Signlogic/> */}
    
    </>
  )
}
export default App
