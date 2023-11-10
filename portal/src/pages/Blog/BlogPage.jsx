import React, { useCallback, useEffect, useState } from 'react'
import ItemBlog from '../../components/blog/ItemBlog'
import { Drawer, Row, notification } from 'antd'
import Button from '../../components/common/Button'
import Editer from '../../components/common/Editer'
import { FormProvider, useForm } from 'react-hook-form'
import FromInput from '../../components/common/Input'
import TagsList from '../../components/common/TagsList'
import { addPost, getListPost } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"

const BlogPage = () => {
    const dispatch = useDispatch()
    const [showAdd, setShowAdd] = useState(false)
    const methods = useForm({})
    const [api, contextHolder] = notification.useNotification()

    const { listPost = [] } = useSelector((state) => state?.reducer)

    const _funcGetListBlog = useCallback(async () => {

        try {

            dispatch(getListPost())

        } catch (error) {
            console.log(error)
        }

    }, [])


    useEffect(() => {

        _funcGetListBlog()
    }, [])

    const handleSubmit = () => {
        const value = methods.getValues()
        try {
            dispatch(addPost(value))
            api["success"]({
                message: 'Notification',
                description:
                    'Add post success'
            })

            methods.reset()

        } catch (error) {
            api["error"]({
                message: 'Notification',
                description:
                    'Something wrong'
            })
        }

    }

    return (
        <React.Fragment>
            {contextHolder}
            <div className='w-[85%]'>
                <div className='w-full flex justify-end mb-[16px]'>
                    <Button title='Thêm mới bài biết' onClick={() => setShowAdd(true)} />
                </div>

                <Row gutter={[20, 24]}>
                    {listPost.map((item, key) => {
                        return <ItemBlog item={item} key={key} />
                    })}
                </Row>

                <Drawer placement="right" open={showAdd} onClose={() => setShowAdd(false)} closeIcon={null} width={"40%"}>
                    <FormProvider {...methods}>
                        <div className='mb-[8px]'>
                            <FromInput title='Title' field={'title'} />
                        </div>

                        <div className='mb-[8px]'>
                            <TagsList title={"Tags"} />
                        </div>


                        <Editer title='Content' field={'post_content'} />
                    </FormProvider>

                    <div className='w-full flex justify-end mt-[40px]'>
                        <Button title='Thêm mới' onClick={() => handleSubmit()} />
                    </div>

                </Drawer>

            </div>
        </React.Fragment>
    )
}

export default React.memo(BlogPage)