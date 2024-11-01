import { useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios"; 
import { useNavigate } from "react-router-dom";

function Signup() {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     axios.post('https://localhost:3001/register', {name, email, password})
        //     .then(result => {console.log(result)
        //     navigate('/login')
        //     })
        //     .catch(err => console.log(err))
        // }   
        
        const onSubmit = async (e) => {
            e.preventDefault();
            const res = await fetch('https://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    username: data.username,
                    password: data.password
                }),
            })

            if(res.ok){
                navigate('/login')
            }
            else {
               console.error("Registration failed")
            }
        }
        return (
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={handleChange}
                        value={formData.name}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={handleChange}
                        value={formData.username}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={handleChange}
                        value={formData.password}
                        />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Register
                </button>
                </form>
                <p>Already Have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg light rounded-0 text-decoration-none">
                    Login
                </Link>
                
            </div>
        </div>
    )    
}

export default Signup;
