import React, { Component } from 'react'
import Select from 'react-select'

import {data} from './objects'

class Test extends Component {
    constructor(props){
        super(props)
        this.state={
            domaine:null,
            secteur:null}
    }
    renderDomaine=()=>{
        console.log(data,'data')
        const domaine=data.domain.map(elem=>{
            return {label:elem.name,value:elem.name}
        })
        return domaine
    }
    renderSecteur=()=>{
        const {domaine}=this.state
        const sec= data.domain.find(d=>d.name === domaine)
        const secteur=sec.secteur.map(elem=>{
            return {label:elem.name,value:elem.name}
        })
        return secteur
    }
    handleChange=(d)=>{
this.setState({domaine:d.value})
    }
    renderCenterDeFormation=()=>{
        const centre= data.domain.flatMap(d=>{
            return d.secteur.flatMap(dCenter=>{
                return {name:d.name,centre:dCenter.centre} 
            })
        })
 console.log(centre,'centre')
        return centre 
    }
    render() {
        const {domaine}=this.state
        console.log(this.renderCenterDeFormation())
        return(

  <div>
       domaine: <Select onChange={this.handleChange}  options={this.renderDomaine() ? this.renderDomaine():[]} />
      {domaine && <div>secteur: <Select  options={this.renderSecteur() ? this.renderSecteur():[]} /></div>} 

      </div>
    

        )
    }
}


export default Test
