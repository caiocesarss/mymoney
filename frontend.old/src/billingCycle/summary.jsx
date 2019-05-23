import React, { Component } from 'react'
import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';


export default ({credit, debt}) => (
    <Grid cols="12">
        <fieldset>
        <legend>Resumo</legend>
        <Row>
        <ValueBox 
            cols="12 4" 
            color="green" 
            icon="bank"
            text="Total de Créditos"
            value={`R$ ${credit}`}
        />
        <ValueBox 
            cols="12 4" 
            color="red" 
            icon="credit-card"
            text="Total de Débitos"
            value={`R$ ${debt}`}
        />
        <ValueBox 
            cols="12 4" 
            color="blue" 
            icon="money"
            text="Valor Consolidado"
            value={`R$ ${credit-debt}`}
        />
        </Row>
        </fieldset>
    </Grid>
)
