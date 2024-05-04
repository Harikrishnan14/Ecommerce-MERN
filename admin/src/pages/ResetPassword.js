import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
    return (
        <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
                <h3 className='text-center'>Reset Password</h3>
                <p className='text-center'>Plase enter your new password</p>
                <form action="">
                    <CustomInput type='password' label='New Password' i_id='password' />
                    <CustomInput type='password' label='Confirm Password' i_id='Cpassword' />
                    <button className='border-0 px-3 py-2 text-white fw-bold w-100' type='submit' style={{ background: "#ffd333" }}>Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
