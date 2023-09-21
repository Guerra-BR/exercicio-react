import { useState } from 'react'
import styles from './Main.module.css'

function Main(){
    let [peso, setPeso] = useState(0)
    let [altura, setAltura] = useState(0)

    const calculaIMC = () => {
        let altura2 = altura * altura
        let IMC = peso / altura2

        console.log(peso)
        console.log(altura)
        console.log(altura2)
        console.log(IMC)


        if(peso == 0 || altura == 0){
            return (<p>Informe a altura e o peso antes de realizar o calculo</p>)
        } else{
            return (<p>Seu IMC é { IMC }</p>)
        }
    }

    return (
        <>
            <form className={styles.container}>
                <div className={styles.min}>
                    <label className={styles.label} htmlFor="altura">Insira sua altura em metros (use ".")</label>
                    <input onChange={e => setAltura(parseFloat(e.target.value))} className={styles.input} id="altura" type="text" placeholder="Sua altura em Metros"/>
                </div>
                <div className={styles.min}>
                    <label className={styles.label} htmlFor="peso">Insira seu peso Em KG</label>
                    <input onChange={e => setPeso(parseFloat(e.target.value))} className={styles.input} id="peso" type="text" placeholder="Sua altura em Kilos"/>
                </div> 
            </form>
            <span className={styles.IMC}>{calculaIMC()}</span>
        </>
    )  
}

export default Main