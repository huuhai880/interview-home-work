import React from "react"
import { useSelector } from "react-redux"

const HeaderLayout = () => {
    const { user } = useSelector((state) => state?.reducer)
    return (
        <div className="bg-white w-full min-h-[55px] fixed z-50 px-[20px] py-[8px] wrap-card grid md:grid-cols-2 grid-cols-1 mb-[20px] flex-col gap-[20px]">
            <div className="flex justify-start items-center">
                <img alt="avatr" src="/icons/logo.png" className="h-[60px] w-[120px] mr-[4px] object-contain" />
            </div>
           
            <div className="flex justify-end items-center">
                <div className="bg-[#f4f5fa] w-[250px] h-[40px]  mr-[32px] rounded-full flex items-center px-[12px]">
                    <img alt="avatr" src="/icons/search.png" className="h-[20px] w-[20px] mr-[4px]" />
                    <input placeholder="Tìm kiếm" className="bg-[#f4f5fa] outline-none w-full" />
                </div>

                <div className="flex justify-center items-center min-w-fit">
                    <img alt="avatr" src="/icons/icon-user-emty.png" className="h-[40px] w-[40px]" />
                    <span className="ml-[4px] text-black font-semibold text-[14px] leading-[24px]">{user?.name}</span>
                </div>
            </div>
        </div>
    )
}
export default React.memo(HeaderLayout)