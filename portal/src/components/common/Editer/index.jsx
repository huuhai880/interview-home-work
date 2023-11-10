import React from 'react'
import { useFormContext } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styled from 'styled-components'

const ContentEditer = styled(ReactQuill)`
  .ql-toolbar.ql-snow {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .ql-formats {
    margin-right: 0px;
  }
  .ql-container {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .ql-editor {
    min-height: 200px;
  }
`

const Editer = ({ title = "", field, placeholder, validation, ...props }) => {

    const methods = useFormContext()

    React.useEffect(() => {
        methods.register(field, validation)
    }, [methods, field, validation])

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'size', 'font', 'align',
        'link', 'color', 'background', 'clean'
    ]
    return (
        <React.Fragment>
            <span className='text-[14px] leading-[24px] font-bold mb-[8px]'>{title}</span>
            <ContentEditer
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                theme="snow"
                value={methods.watch(field) ?? ''}
                onChange={(value) => {
                    methods.clearErrors(field)
                    methods.setValue(field, value)
                }}
                {...props} />
        </React.Fragment>
    )
}

export default React.memo(Editer)