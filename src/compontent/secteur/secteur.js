import React from 'react';
// import Button from 'react-bootstrap/Button';
import ReactBootstrap, {ButtonToolbar, Button} from 'react-bootstrap'
// import { Button } from 'react-bootstrap';
// import './.css';

const Secteur = () => {
    return (
      <div className="secteur">
        <ButtonToolbar>
  <Button variant="outline-primary">Systèmes Informatiques</Button>
  <Button variant="outline-secondary">Sécurité Informatique</Button>
  <Button variant="outline-success">Reseau Informatique</Button>
  <Button variant="outline-warning">Full Stack</Button>
  <Button variant="outline-danger">Maintenance Informatique</Button>
  <Button variant="outline-info">Genie Logiciel</Button>
  <Button variant="outline-light">Big Data</Button>
  <Button variant="outline-dark">Design Informatique</Button>
</ButtonToolbar>
      </div>
      )
  }

  export default Secteur