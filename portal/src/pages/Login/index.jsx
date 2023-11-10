import { FormProvider, useForm } from "react-hook-form"
import FromInput from "../../components/common/Input"
import Button from "../../components/common/Button"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../../redux/actions"
import { Navigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const methods = useForm({defaultValues: { user_name: '0346508758', password: "user@123" }})
    const { user } = useSelector((state) => state?.reducer)

    const handleSubmit = () => {

        const { user_name, password } = methods.getValues()

        dispatch(userLogin({ user_name, password }))
    }

    if (user) {
        return <Navigate to='/blog' push />
    }

    return (

        <div className="w-full h-[100vh] flex justify-center items-center bg-[#f4f5fa]">
            <FormProvider {...methods}>
                <div className="w-[400px] h-[30vh] bg-white rounded-[8px] p-[12px] flex justify-center flex-col">

                    <div className='mb-[8px]'>
                        <FromInput title='user name' field={'user_name'} />
                    </div>
                    <div className='mb-[8px]'>
                        <FromInput type={"password"} title='password' field={'password'} />
                    </div>

                    <Button title='Đăng nhập' onClick={() => handleSubmit()} showIcon={false} />

                </div>
            </FormProvider>

        </div>
    )
}
export default Login