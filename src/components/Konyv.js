import { KosarContext } from "../contexts/KosarContext"
import { useContext } from 'react';

export default function Konyv(props){
    const { kosarba }=useContext(KosarContext)
    function kosar(){
        kosarba(props.index)
    }

    return (
        <div className="card col-lg-4 col-md-6">
            <div className="card-body">
                <h5 className="card-title">{props.adat.cim}</h5>
                <p className="card-text">{props.adat.leiras}</p>
                <button className="btn btn-success" onClick={kosar}>Kosárba</button>
            </div>
        </div>
    )
}