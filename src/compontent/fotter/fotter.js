import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contactez nous</h5>
            <p>
              Adresse: GoMyCode Hackerspace, Immeuble NEO, 2ème étage, Rue du lac lochness, Les Berges du Lac1, Tunis 1053
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">CONTACTS:</h5>
            <ul>
              <li className="list-unstyled">
              Télephone: XXXxxx
              </li>
              <li className="list-unstyled">
                Email: proforma@gmail.com
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;