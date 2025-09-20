import React from "react";
export default function Card ({title, children,img}) {
    return (
        <React.Fragment>
       <div className="card">
        <img src={img} className={img ? "card-img-top" : "card-display"} alt="Image cap"/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </React.Fragment>
    );
}