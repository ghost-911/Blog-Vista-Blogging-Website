import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarimg"
            src="./Images/govind.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, totam!

            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sports</li>
              <li className="sidebarListItem">Cinema</li>
              <li className="sidebarListItem">Life</li>
            </ul>
        </div>
         
         <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon  fa-brands fa-github"></i>
                <i className="sidebarIcon  fa-brands fa-linkedin"></i>
            </div>
         </div>


    </div>
  )
}