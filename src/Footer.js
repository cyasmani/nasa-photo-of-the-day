import React, { useState } from 'react'
import { Container } from "reactstrap";
import footer from "./"


function Footer(props) {

    const {footerData, footerGetData} = props;

    return (
        <div>
            <Container className="themed-container" fluid="lg">
                <p>{props.footerGetData.copyright}</p>


            
        
            </Container>
            
        </div>
    )
}

export default Footer
