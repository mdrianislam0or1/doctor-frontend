import React, { useState } from 'react'

const LoginPage = () => {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
        role,
        email,
        password,
        address,
        phone,
        image,
        date
      };
  
      fetch('http://localhost:5000/api/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          // Handle the response from the backend
        })
        .catch(error => {
          // Handle errors
        });
    };
  
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium leading-6 text-gray-900">Role</label>
          <input id="role" name="role" type="text" value={role} onChange={e => setRole(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
          <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <input id="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
          <label className="block text-sm font-medium leading-6 text-gray-900">Address</label>
          <input id="address" name="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
          <label className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
          <input id="phone" name="phone" type="number" value={phone} onChange={e => setPhone(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
          <label className="block text-sm font-medium leading-6 text-gray-900">Image</label>
          <input id="image" name="image" type="text" value={image} onChange={e => setImage(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
          <label className="block text-sm font-medium leading-6 text-gray-900">Date</label>
          <input id="date" name="date" type="date" value={date} onChange={e => setDate(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
        <button type="submit" className="flex w-full justify-center rounded-md">Sign in</button>
        </form>
     </div>
    )
}

export default LoginPage