import './styles.css';
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeIndex(){
    return(
        <main>
            <section id="home-section">
                <div className="home-title">
                    <h1>Desafio GitHub API</h1>
                    <h3>DevSuperior - Escola de Programação</h3>
                </div>
                <Link to="/home-result">
                    <Button text="Começar"></Button>
                </Link>
            </section>
        </main>
    );
}