import React from "react"

const Button = ({ title = "", showIcon = true, onClick }) => {
    return (
        <div className="px-[12px] py-[8px] bg-lime-500 text-white rounded-[4px] text-[12px] leading-[18px] cursor-pointer hover:shadow-lg flex justify-center items-center"
            onClick={onClick}>
            {showIcon && <img src='/icons/add_icons.png' className="w-[20px] h-[20px] mr-[4px]" />}
            <span>{title}</span>
        </div>
    )
}

export default React.memo(Button)