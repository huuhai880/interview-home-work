import { Col } from 'antd'
import React from 'react'

const ItemBlog = ({item}) => {
    return (
        <Col span={6}>
            <div className='bg-white rounded-[8px] min-h-[300px] w-full p-[8px] cursor-pointer hover:shadow-xl' >
                <div className='flex flex-col w-full'>
                    <div className='w-full h-[200px] bg-[#f4f5fa] rounded-[8px]'>

                    </div>
                    <div className='mt-[16px] flex px-[4px]'>
                        <img alt="avatr" src="/icons/icon-user-emty.png" className="h-[35px] w-[35px] mr-[4px] rounded-full" />
                        <div className='w-full ml-[8px] flex flex-col'>
                            <span className='text-[16px] leading-[20px] font-semibold'>{item?.title}</span>
                            <span className='text-[12px] leading-[18px] text-[#9f9f9f] mt-[4px]'>23/10/2023</span>
                            <div className='w-full'>
                                <div className='line-clamp-3' dangerouslySetInnerHTML={{__html:item?.content}}>
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ItemBlog