import "../styles/Display.css"

function Display({cv}){
    return (<div className="cv-preview">
        <h1>{cv.contact.name}</h1>
    </div>)
}

export default Display;