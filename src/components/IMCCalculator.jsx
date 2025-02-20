import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import styles from "./Calculadora.module.css";  

export default function IMCCalculator() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState(null);
    const [indicadorPosicao, setIndicadorPosicao] = useState(0);  

    function calcularIMC() {
        if (!altura || !peso || isNaN(altura) || isNaN(peso)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const alturaMetros = parseFloat(altura) / 100; 
        const imc = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
        setResultado({ imc, classificacao: classificarIMC(imc) });
    }

    function classificarIMC(imc) {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc >= 18.5 && imc < 24.9) return "Peso normal";
        if (imc >= 25 && imc < 29.9) return "Sobrepeso";
        if (imc >= 30 && imc < 34.9) return "Obesidade Grau I";
        if (imc >= 35 && imc < 39.9) return "Obesidade Grau II";
        return "Obesidade Grau III";
    }

    useEffect(() => {
        if (resultado) {
            let posicao = 0;
            if (resultado.imc < 18.5) posicao = 5;
            else if (resultado.imc < 24.9) posicao = 20;
            else if (resultado.imc < 29.9) posicao = 40;
            else if (resultado.imc < 34.9) posicao = 60;
            else if (resultado.imc < 39.9) posicao = 80;
            else posicao = 100;

            setIndicadorPosicao(posicao);
        }
    }, [resultado]);

    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
                <h1 className={styles.title}>Calculadora de IMC</h1>

                <div className={styles.display}>
                    {resultado ? `IMC: ${resultado.imc}` : "0.00"}
                </div>

                <input
                    type="number"
                    placeholder="Altura (cm)"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    className={styles.inputField}
                />
                <input
                    type="number"
                    placeholder="Peso (kg)"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    className={styles.inputField}
                />

                <button onClick={calcularIMC} className={styles.button}>
                    Calcular IMC
                </button>

                {resultado && (
                    <div className={styles.resultContainer}>
                        <p className={styles.resultText}>
                            IMC: <strong>{resultado.imc}</strong>
                        </p>
                        <p className={styles.resultText}>
                            Classificação: <strong>{resultado.classificacao}</strong>
                        </p>

                        <div className={styles.termometroContainer}>
                            <div
                                className={styles.indicador}
                                style={{
                                    left: `${indicadorPosicao}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                )}

                {/* Ícones de Redes Sociais */}
                <div className={styles.footerIcons}>
                    <a href="linkedin.com/in/michelap19/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/michelap19/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://github.com/MichaeLdeLima27" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.icon} />
                    </a>
                    <a href="https://www.youtube.com/@atecamping?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className={styles.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
}
