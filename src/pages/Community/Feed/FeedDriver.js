import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Footer } from "../../../components";
import { Buttons } from "../../../components/Community/Feed";
import { CardLayout } from '../../../components/Common/styled'
import { CardTitle } from '../../../components/Common'
import {
    HomeFeed,
    CommunityInbox,
    Communities,
    EnrolledCourses,
} from '../Feed'

const FeedDriver = () => {
    const [step, setStep] = useState(0);

    const steps = [
        "HomeFeed",
        "Inbox",
        "Communities",
        "Enrolled Courses",
    ];

    const handleStep = (id) => {
        setStep(id);
    }

    function _renderStepContent(step) {
        switch (step) {
            case 0: return <HomeFeed></HomeFeed>
            case 1: return <CommunityInbox></CommunityInbox>;
            case 2: return <Communities></Communities>;
            case 3: return <EnrolledCourses></EnrolledCourses>
        }
    }

    return (
        // Overriding layout styles with inline-styling.
        <main style={{ backgroundColor: "#424d83" }}>
            <Navbar page="community"></Navbar>
            <CardLayout style={{ backgroundColor: "#424d83" }}>
                <Buttons handleStep={handleStep} step={step}></Buttons>
                <Wrapper>
                    <div style={{ backgroundColor: "#ffffff" }} className="card">
                        <div className="card__content">
                            {_renderStepContent(step)}
                        </div>
                    </div>
                </Wrapper>
            </CardLayout>
            <Footer></Footer>
        </main >
    );
};

export default FeedDriver;

const Wrapper = styled.div`
`;