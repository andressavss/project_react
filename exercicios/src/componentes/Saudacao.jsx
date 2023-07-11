import React, { Component } from "react"

export default class Saudacao extends Component {

    state = {                     // estado que pode ser alterado
        tipo: this.props.tipo,   
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this) // retornando uma cópia da function com this modificado, sempre apontando para o componente (this) atual
    }

    setTipo(e) {   // o componente só é atualoizado quando o estado muda
        this.setState({ tipo: e.target.value }) // alterando o estado do objeto
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state // tirando propriedades de dentro de props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                 value={tipo} onChange ={this.setTipo} /> 
                <input type="text" placeholder="Nome..." 
                value={nome} onChange ={e => this.setNome(e)} />
            </div>
        )
    }
}