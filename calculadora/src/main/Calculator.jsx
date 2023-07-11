import React, { Component } from "react";
import './Calculator.css'

import Button from '../components/Button';
import Display from "../components/Display";

const initialState =  {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0], // primeiro e segundo número colocado na calculadora
    current: 0 // vai dizer se está manipulando o número de índice 0 ou 2
}

export default class Calculator extends Component {

    state = { ...initialState } // fazendo uma cópia do estado

    constructor(props) {
        super (props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation
        
            const values = [...this.state.values]
            try { 
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`) // adicionando o primeiro valor, colocando a operação e adicionando o segundo valor
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                return
                }
                
            } catch(e) {
                values[0] = this.state.values[0] // para não mudar o valor atual do estado
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) { // para não incluir dois pontos
            return
        }

        const clearDisplay = this.state.displayValue === '0'  // para limpar e adicionar o novo digito
            ||  this.state.clearDisplay // para evitar o zero à esquerda
        const currentValue = clearDisplay ? '' : this.state.displayValue // se tiver limpo não acontece, mas se não tiver, ele lê o display 
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.current // recebe o índice correspondente 0 ou 1
            const newValue = parseFloat(displayValue) // passando de string para número
            const values = [...this.state.values] // clonando para um novo array
            values[i] = newValue  // recebendo o novo valor de acordo com o índice
            this.setState({ values })
            console.log(values)
        }

    }
    
    render() {  // function que irá renderizar tudo
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC " click={this.clearMemory} triple />
                <Button label="/"  click={this.setOperation} operation />
                <Button label="7"  click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}