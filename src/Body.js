import React, { useState, useEffect } from 'react'
import { Jumbotron} from "reactstrap";
import axios from "axios";


function Body (props) {

    const {bodyGetData, getData} = props;

    console.log(props.bodyGetData);

    
    return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Nasa Photo of The Day</h1>
                    <p className="lead">{props.bodyGetData.title}</p>
                    <hr className="my-2" />
                    <p>{props.bodyGetData.date}</p>
                    <img src={props.bodyGetData.hdurl}></img>
                    <p>{props.bodyGetData.explanation}</p>
              
                </Jumbotron>
            </div>
    )
}

export default Body