import React from "react";
import bootstrap from 'bootstrap';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MGC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/turismo">Turismo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cultura">Cultura</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/deportes">Deportes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/fiesta-del-caballo">Fiesta del Caballo</a>
                        </li>
                        {/*<li className="nav-item">
                            <a className="nav-link" href="/eventos">Eventos</a>
</li>*/}
                        {/*<li className="nav-item">
                            <a className="nav-link" href="/rentas">Rentas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/inspeccion">Inspeccion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/obras">Obras</a>
                        </li>*/}
                        <li className="nav-item">
                            <a className="nav-link" href="/social">Social</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export { Navbar };