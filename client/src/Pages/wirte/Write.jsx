import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="./Images/rohit-tandon-9wg5jCEPBsw-unsplash.jpg" alt="" />


        <form  className="writeform">
            <div className="writeformGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon  fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>

            <div className="writeformGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>

            <button className="writesubmit">Publish</button>
        </form>
    </div>
  )
}
