import React from "react";
import "./FeatureB.css";
import Skillset from "../../components/Skillset/Skillset";
import AWSImage from "../../assets/aws.png";


export default function FeatureBScreen() {
    return (
        <div>
            <Skillset imagesource={AWSImage} />
        </div>
    );
}