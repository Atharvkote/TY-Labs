import React, { useState } from 'react'
import { toast } from 'sonner';


const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorFlag, setErrorFlag] = useState(false);
    const [colour1, setColour1] = useState("text-red-500");
    const [colour2, setColour2] = useState("text-red-500");
    const [colour3, setColour3] = useState("text-red-500");
    const [colour4, setColour4] = useState("text-red-500");


    const handleValidation = () => {
        if (!name) {
            toast.error("Name field is required");

            return;
        }
        if (!email) {
            toast.error("Email field is required");
            return;
        }
        if (!password) {
            toast.error("Password field is required");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid Email Used");
            return;
        }

        validatePassword(password);

        if (!errorFlag) {
            toast.success("Form Submitted Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setColour1("text-red-500");
            setColour2("text-red-500");
            setColour3("text-red-500");
            setColour4("text-red-500");
            setErrorFlag(false);
        }
    }

    const validatePassword = (password) => {
        setColour1("text-red-500");
        setColour2("text-red-500");
        setColour3("text-red-500");
        setColour4("text-red-500");

        if (password.length >= 6) {
            setColour1("text-green-500");
            setErrorFlag(false);
        }

        if (/[A-Z]/.test(password)) {
            setColour2("text-green-500");
            setErrorFlag(false);
        }

        if (/[^a-zA-Z0-9]/.test(password)) {
            setColour4("text-green-500");
            setErrorFlag(false);
        }

        if (/\d/.test(password)) {
            setColour3("text-green-500");
        }

        setPassword(password);
    }

    return (
        <div className='flex flex-col items-center gap-5 p-6'>
            <div className='flex flex-col gap-4 bg-white shadow-lg border border-green-300 p-6 rounded-lg w-[350px]'>
                <h3 className='font-bold text-xl text-green-700 text-center'>Form Handling</h3>

                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Name</label>
                    <input className='bg-green-50 border border-green-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Email</label>
                    <input className='bg-green-50 border border-green-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Password</label>
                    <input className='bg-green-50 border border-green-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500' type="password" placeholder='Enter Password' onChange={(e) => validatePassword(e.target.value)} />
                </div>

                <div>
                    <h3 className='font-semibold mb-1'>Password Strength</h3>
                    <ul className='text-sm'>
                        <li className={`${colour1}`}>Minimum Six Characters</li>
                        <li className={`${colour2}`}>At 1 Uppercase Character</li>
                        <li className={`${colour3}`}>At 1 Numeric Character</li>
                        <li className={`${colour4}`}>At 1 Symbolic Character</li>
                    </ul>
                </div>

                <button onClick={handleValidation} className='bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition'>
                    Submit
                </button>
            </div>

            <div className='text-center'>
                <h3 className='font-bold text-lg'>Entered Data</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Password:</strong> {password}</p>
            </div>
        </div>)
}

export default Form
