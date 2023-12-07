import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import '../../css/login.css';
import 'typeface-merriweather';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await Inertia.post('/loginproc', formData);
      console.log(formData);
      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Failed to submit data', error);
    }
  };

  return (
    <div className="container-log">

    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          <input type="hidden" name="_token" value={window.csrf_token} />
          <h1 className="login">Login</h1>
          <h2>Email</h2>
          <input
            name="email"
            type="email"
            placeholder="email..."
            className="inpt"
            onChange={handleInputChange}
            value={formData.email}
            required
          />

          <h2>Password</h2>
          <input
            name="password"
            type="password"
            placeholder="password..."
            className="inpt"
            onChange={handleInputChange}
            value={formData.password}
            required
          />
          <div className="link">
            <button type="submit" className="login-btn">
              Login
            </button>
            <Link href="/register" className='logreg'>
              <p>Register Here</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
export default Login;
