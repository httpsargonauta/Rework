import {userIcon, passwordIcon, folderEmploye} from "../icons/icons";
import PropTypes from "prop-types";

export const InputCustom = ({placeholder, label, type, firstIcon, secondIcon, startIcon, endIcon, change}) => {

    const changeIcon = () => {
        change()
    }

    const setImage = (img) => {
        if(img == 'userIcon') return <img src={userIcon} alt="" className="size-8" />
        if(img == 'passwordIcon') return <img src={passwordIcon} alt="" className="size-8" onClick={changeIcon}/>
        if(img == 'folderEmploye') return <img src={folderEmploye} alt="" className="size-8" />

    }

    return (
        <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label htmlFor={label}>
                {startIcon && (setImage(firstIcon))}
            </label>
            <input
                type={type}
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
