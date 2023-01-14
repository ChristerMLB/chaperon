function ToppVenstre(props){
    return (
        <div id="toppvenstre" >
            <div id="topptopp"><img id="toppvenstrebilde" src={"fortellimg/"+props.currentImg[0]+"."+props.filFormat} alt={props.currentImg[2]} /></div>
            <div id="toppbunn">
                <h1 id="spinner" className="transparent">SPIN ME ROUND ROUND</h1>
                <img id="nubilde" src={"fortellimg/"+props.currentImg[0]+"."+props.filFormat} alt={props.currentImg[2]} className="transparent" />
            </div>
        </div>
    )
}

export default ToppVenstre;