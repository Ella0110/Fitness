// app/login/page.js
'use client';

import { useState, useEffect } from 'react';
import { signIn } from 'aws-amplify/auth';
import React from 'react';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   setUsername('wwww')
  // }, [password])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      console.log(isSignedIn, nextStep)
      setMessage('登录成功');
    } catch (error) {
      setMessage(error.message);
    }
  };
  //console.log('test')

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border">
      <h1 className="text-2xl font-bold mb-4">登录</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">用户名</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">密码</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">登录</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}
