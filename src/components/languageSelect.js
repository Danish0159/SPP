import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18next from "i18next";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

const languageMap = {
    en: {
        label: "English", dir: "ltr", active: true
    },
    ar: { label: "العربية", dir: "rtl", active: false },
};

const LanguageSelect = () => {
    let selected;
    if (localStorage.getItem("i18nextLng").slice(0, 2) === "en") {
        selected = "en";
    }
    else if (localStorage.getItem("i18nextLng").slice(0, 2) === "ar") {
        selected = "ar";
    }
    else {
        selected = "en";
    }

    const { t } = useTranslation();

    const [menuAnchor, setMenuAnchor] = React.useState(null);
    React.useEffect(() => {
        document.body.dir = languageMap[selected].dir;
    }, [menuAnchor, selected]);

    return (
        <Wrapper>
            <Button className="button" onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
                {languageMap[selected].label}
                <ArrowDropDown fontSize="small" />
            </Button>
            <Popover
                open={!!menuAnchor}
                anchorEl={menuAnchor}
                onClose={() => setMenuAnchor(null)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <div>
                    <List>
                        <ListSubheader sx={{ fontSize: "1.1rem" }}>{t("Select Language")}</ListSubheader>
                        {Object.keys(languageMap)?.map(item => (
                            <ListItem
                                button
                                key={item}
                                sx={{ fontSize: "1.1rem" }}
                                onClick={() => {
                                    i18next.changeLanguage(item);
                                    setMenuAnchor(null);
                                }}
                            >
                                {languageMap[item].label}
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Popover>
        </Wrapper>
    );
};

export default LanguageSelect;

const Wrapper = styled.div`
display: flex;
justify-content:flex-end;
.button{
    padding: 2px 5px;
    margin: .5rem 0rem;
    margin-right:1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}
`;