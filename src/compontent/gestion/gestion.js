import React from 'react';
// import Button from 'react-bootstrap/Button';
import ReactBootstrap, {ButtonToolbar, Button} from 'react-bootstrap'
// import { Button } from 'react-bootstrap';
// import './.css';

const Gestion = () => {
    return (
      <div className="secteur">
        <ButtonToolbar>
  <Button variant="outline-primary">Comptable d'entreprise</Button>
  <Button variant="outline-secondary"> Informatique de Gestion</Button>
  <Button variant="outline-success"> Comptabilité</Button>
  <Button variant="outline-warning">Commerce</Button>
  <Button variant="outline-danger">Finances</Button>
  <Button variant="outline-info">Genie Logiciel</Button>
  <Button variant="outline-light">Big Data</Button>
  <Button variant="outline-dark">Design Informatique</Button>
</ButtonToolbar>
      </div>
      )
  }

  export default Gestion