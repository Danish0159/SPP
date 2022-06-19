import React, { useEffect } from "react";
import { cardsData } from "../utils/constants";
import { Navbar, Hero, Footer } from "../components";
import { Cards } from "../components/GuestFlow";
import { resetData } from "../slices/users";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const TempHomePage = () => {
    const { t } = useTranslation();

    // Reset ALl the data for welcome flow.
    const dispatch = useDispatch();
    // Reset Everthing.
    useEffect(() => {
        dispatch(resetData());
    }, []);

    // State.
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user"));
    // If User is already logedIN and trying to access the HomePage(ProfileCreated), Redirect him to HomeFeed Page.
    if (user && user.profile) {
        history.push("/HomeFeed");
    }
    // If user is already logedIN and trying to access the HomePage(ProfileCreated Not), Redirect him to JoinUs Page.
    else if (user && !user.profile) {
        history.push("/joinus");
    }
    else {
        history.push("/HomePage");
    }

    return (
        <main>
            <Navbar page="home"></Navbar>
            <Hero></Hero>
            <Cards
                title={t("card_h1")}
                cardsData={cardsData.slice(0, 3)}
                bgColor="null"
            ></Cards>
            <Cards
                title={t("card_h2")}
                cardsData={cardsData.slice(3, 6)}
                bgColor="true"
            ></Cards>
            <Cards
                title={t("card_h3")}
                cardsData={cardsData.slice(6, 9)}
                bgColor="null"
            ></Cards>
            <Footer></Footer>
        </main>
    );
}
export default TempHomePage;