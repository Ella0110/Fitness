// src/app/confirm-signup/page.js
'use client';

import { useState, useEffect } from 'react';
import { confirmSignUp } from 'aws-amplify/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function ConfirmSignUp() {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const username = useSearchParams().get('username')

  console.log(username+'haha')
  useEffect(() => {
    // setUserName(new URLSearchParams(window.location.search).get('username'));
    // console.log(window.location.search)
    if (!username) {
        
      setMessage('无效的用户名。请重新注册。');
    }
  },[]);

  const handleConfirmSignUp = async (e) => {
    e.preventDefault();
    try {
        console.log(username+'请求函数')
        const { isSignUpComplete, nextStep } =  await confirmSignUp({
            username,
            confirmationCode
          });
        console.log(username+'请求函数结束')
      console.log(isSignUpComplete, nextStep)
      setMessage('确认成功！即将跳转到主页面...');
      setTimeout(() => {
        router.push('/');
      }, 2000); // 2秒后跳转到主页
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border">
      <h1 className="text-2xl font-bold mb-4">确认注册</h1>
      <form onSubmit={handleConfirmSignUp}>
        <div className="mb-4">
          <label className="block text-gray-700">验证码</label>
          <input
            type="text"
            className="w-full p-2 text-gray-700 border rounded"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">确认</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}
