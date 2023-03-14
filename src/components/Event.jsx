import { API, graphqlOperation, Storage } from "aws-amplify";
import { listEventos } from "../graphql/queries";
import { useState, useEffect } from "react";
import OwnerEvents from "./OwnerEvents";
const Event = (parm) => {
    console.log(parm)
    return (
        <div>
            <h1>hola</h1>
        </div>
    );
};

export default Event;
