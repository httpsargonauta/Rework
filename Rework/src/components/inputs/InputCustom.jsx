import { useState } from "react";
import {userIcon, passwordIcon, folderIcon,locationIcon,calendarIcon,desriptionIcon,suitcaseIcon,payIcon,clockIcon} from "../icons/icons";
import PropTypes from "prop-types";

export const InputCustom = ({placeholder, label, type, firstIcon, secondIcon, startIcon, endIcon}) => {
    const [typeText, setTypeText] = useState("password");

    const changeIcon = () => {
        const pass = typeText == "password" ? "text" : "password"
        setTypeText(pass);
    }

    const setImage = (img) => {
        if(img == 'userIcon') return <img src={userIcon} alt="" className="size-8" />
        if(img == 'passwordIcon') return <img src={passwordIcon} alt="" className="size-8" onClick={changeIcon}/>
        if(img == 'folderEmploye') return <img src={folderIcon} alt="" className="size-8" />
        if(img == 'locationIcon') return <img src={locationIcon} className="size-8"/>
        if(img == 'calendarIcon') return <img src={calendarIcon} className="size-8"/>
        if(img == 'desriptionIcon') return <img src={desriptionIcon} className="size-8"/>
        if(img == 'suitcaseIcon') return <img src={suitcaseIcon} className="size-8"/>
        if(img == 'payIcon') return <img src={payIcon} className="size-8"/>
        if(img == 'clockIcon') return <img src={clockIcon} className="size-8"/>
    }

    return (
        <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label htmlFor={label}>
                {startIcon && (setImage(firstIcon))}
            </label>
            <input
                type={type ? type : typeText}
                placeholder={placeholder}
                className="bg-transparent focus:outline-none text-md font-semibold text-tertiary text-start items-center justify-center flex-1"
            />
            <label htmlFor={label}>
                {endIcon && (setImage(secondIcon))}
            </label>
        </div>
    );
};

InputCustom.propTypes  = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string = 'text',
    firstIcon: PropTypes.string,
    secondIcon: PropTypes.string,
    startIcon: PropTypes.bool = false,
    endIcon: PropTypes.bool = false,
    change: PropTypes.func,
}
