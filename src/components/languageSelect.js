import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
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
        <div className="d-flex justify-content-end align-items-center language-select-root">
            <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
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
                        <ListSubheader>{t("Select Language")}</ListSubheader>
                        {Object.keys(languageMap)?.map(item => (
                            <ListItem
                                button
                                key={item}
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
        </div>
    );
};

export default LanguageSelect;