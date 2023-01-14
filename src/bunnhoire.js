

function BunnHoire(props){

    return (
        <div id="bunnhoyre">
            <div id="layouthack"></div> {/* fyller ut topp/venstre */}
            <div id="velgebilderdiv">

                {
                    props.velgebilder.map((bilde, index) => (
                            <img 
                                className="bunnhoyrebilde"
                                src={"fortellimg/"+bilde[0]+"."+props.filFormat} 
                                key={index} 
                                alt={bilde[2]} 
                                onClick={()=>props.handleClick(bilde)}
                            />
                        ))
                
                }
                
                { 
                !props.velgebilder.length && <div>
                    <button className="endeknapp" onClick={props.restart}>↻</button>
                    <button className="endeknapp" onClick={props.printImg}><img src="ui-img/tegneserie-min.png" alt="" /></button>
                </div> 
                }

            </div>
        </div>
    )
}

export default BunnHoire;