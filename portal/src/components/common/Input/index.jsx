import React from "react"
import { Input } from 'antd'
import { useFormContext } from 'react-hook-form'

const FromInput = ({ title = "", field, placeholder, validation, ...props }) => {
    const methods = useFormContext()

    React.useEffect(() => {
        methods.register(field, validation)
    }, [methods, field, validation])

    return (
        <React.Fragment>
            {title && <span className='text-[14px] leading-[24px] font-bold mb-[8px]'>{title}</span>}
            <Input
                placeholder={placeholder}
                
                value={methods.watch(field) ?? ''}
                onChange={({ target }) => {
                    methods.clearErrors(field)
                    methods.setValue(field, target?.value)
                }}
                {...props} />

        </React.Fragment>
    )
}
export default FromInput