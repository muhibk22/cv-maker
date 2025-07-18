import "../styles/Display.css"

function Display({cv}){
    return (<div className="cv-preview">
        <h1>{cv.contact.name}</h1>
        <h2>{cv.contact.email}</h2>
        <h2>{cv.contact.phone}</h2>
        <h2>{cv.contact.location}</h2>
    </div>)
}

export default Display;