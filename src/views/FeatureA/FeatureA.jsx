import React from "react";
import Achievement from "../../components/Achievement/Achievement";
import "./FeatureA.css";


export default function FeatureAScreen() {
    return (
        <div>
            <Achievement year="2019" award="NIAA Best Senior Writer in Zimbabwe" description="I have written plays which analyze the effects corrupt governance in Zimbabwe has on families, with my play Rules of the Game earning me the distinction of Best Senior Writer in the country by the NIAA." />
            <br></br>
            <Achievement year="2017-2019" award="ISEF and Buskers Researcher" description="For 2 years I researched the applications of machine learning in sub-Saharan Africa. My work was recognized by the Africa Science Buskers Festival and Zimbabwe Science Fair." />
        </div>
    );
}