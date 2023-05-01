import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
const navigate = useNavigate()
const location = useLocation()
console.log(location)

    const {createAccount}= useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault()

        const from = location.state?.from.pathname || '/'

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createAccount(email, password)
            .then(result => {
                const logged = result.user
                // userName(name)
                navigate(from)

            })
            .catch(error => {
                console.log(error.message)
            })

    }


    return (
        <div>
            <form onSubmit={handleRegister} className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='confirmPass' type="password" placeholder="Confirm Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Register</button>
                        </div>
                        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                        {/* <p className='text-red-400'>{error}</p> */}

                    </div>
                </div>
            </div>
        </form>
        </div>
    );
};

export default Register;