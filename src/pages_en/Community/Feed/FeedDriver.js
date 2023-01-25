import React, { useState } from "react";
import { Footer } from "../../../components_en";
import { Buttons } from "../../../components_en/Community/Feed";
import { CardLayout } from '../../../Shared/styled'
import { NavbarCommunity } from '../../../components_en/Navigations'
import {
    HomeFeed,
    CommunityInbox,
    Communities,
    EnrolledCourses,
} from '../Feed'

const FeedDriver = () => {
    const [step, setStep] = useState(0);

    const handleStep = (id) => {
        setStep(id);
    }

    function _renderStepContent(step) {
        switch (step) {
            case 0: return <HomeFeed></HomeFeed>
            case 1: return <CommunityInbox></CommunityInbox>;
            case 2: return <Communities></Communities>;
            case 3: return <EnrolledCourses></EnrolledCourses>
            default:
                return <div>Not Found</div>;
        }
    }

    return (
        // Overriding layout styles with inline-styling.
        <main style={{ backgroundColor: "#424d83" }}>
            <NavbarCommunity></NavbarCommunity>
            <CardLayout style={{ backgroundColor: "#424d83" }}>
                <Buttons handleStep={handleStep} step={step}></Buttons>
                <div style={{ backgroundColor: "#ffffff" }} className="card">
                    <div className="card__content">
                        {_renderStepContent(step)}
                    </div>
                </div>
            </CardLayout>
            <Footer></Footer>
        </main >
    );
};

export default FeedDriver;