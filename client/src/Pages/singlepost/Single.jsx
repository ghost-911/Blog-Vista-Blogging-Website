import Sidebar from "../../components/sidebar/Sidebar"
import SingPost from "../../components/singpost/SingPost"
import "./single.css"


export default function Single() {
  return (
    <div className="single">
        <SingPost/>
        <Sidebar/>
    </div>
  )
}
