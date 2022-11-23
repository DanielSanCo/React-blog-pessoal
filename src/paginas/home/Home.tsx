import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <header>
                <div>Logo</div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
            </header>

            <div className="main">
                <div className="radius">
                    <h2>Feito por</h2>
                    <h1>Daniel Santos</h1>
                </div>
                <img src="./images/crimsonDragonArch.png" alt="" />
            </div>

            <div className="firePage">
                <div className="divAbsolute"></div>
                <img src="https://i.pinimg.com/originals/5e/5c/aa/5e5caae1a1f411f7d35d341440567906.gif" alt="" />
            </div>
        </div>
    )
}

export default Home;