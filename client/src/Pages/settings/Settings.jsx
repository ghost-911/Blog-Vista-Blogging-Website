import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsupdateTitle">Update Your Account</span>
                <span className="settingsdeleteTitle">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label> Profile Picture</label>
                <div className="settingsPP">
                    <img src="./Images/govind.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>

                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>

                <label>Username</label>
                <input type="text" placeholder="Govind"/>
                <label>Email</label>
                <input type="email" placeholder="Govind@123"/>
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>


            </form>


        </div>
        <Sidebar/>


    </div>
  )
}
