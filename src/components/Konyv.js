export default function Konyv(props){
    function kosarba(){
        props.kosarba(props.index)
    }

    return (
        <div className="card col-lg-4 col-md-6">
            <div className="card-body">
                <h5 className="card-title">{props.adat.cim}</h5>
                <p className="card-text">{props.adat.leiras}</p>
                <button className="btn btn-success" onClick={kosarba}>Kosárba</button>
            </div>
        </div>
    )
}