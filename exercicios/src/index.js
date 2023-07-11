import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
//import Multi, { BoaNoite } from './componentes/Multiplos'  // importando usando o destructuring
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// const elemento = <h1>React 2</h1> // embora pareça HTML, é um JSX, que por baixo roda js puro
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>
        
    </div>
, document.getElementById('root'))
