import React from "react";
import { childrenWithProps } from "./utils/utils";


export default props =>
   <div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {childrenWithProps(props)}
    </ul>
   </div>

// props: propriedades que podem ser passadas, mas são somente para leitura
// estado: em class, o estado pode ser alterado