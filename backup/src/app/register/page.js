// app/register/page.js
'use client';

import { useState } from 'react';
import { signUp } from 'aws-amplify/auth';
import React from 'react';
import { useRouter } from 'next/navigation';
import Providers from '../providers'

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signUp({
        username,
        password,
        attributes: { email },
      });
      setMessage('注册成功！请检查您的电子邮件以验证账户。');
      // 注册成功后跳转到确认页面，传递用户名
      setTimeout(() => {
        // console.log(username)
        router.push(`/confirmsignup?username=${encodeURIComponent(username)}`);
      }, 2000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border">
      <h1 className="text-2xl font-bold mb-4">注册</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700">用户名</label>
          <input
            type="text"
            className="w-full p-2 text-gray-700 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">密码</label>
          <input
            type="password"
            className="w-full p-2 text-gray-700 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">电子邮件</label>
          <input
            type="email"
            className="w-full p-2 text-gray-700 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">注册</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}
