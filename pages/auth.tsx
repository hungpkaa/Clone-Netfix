import { useState } from 'react';
import Input from '@/components/input';
const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="relative min-h-screen w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-black/50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>

        <div className="flex justify-center">
          <div className="mt-2 w-full rounded-md bg-black/70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">Sign In</h2>
            <div className="flex flex-col gap-4"></div>
            <Input
              label="Username"
              onChange={(any) => setName(any.target.value)}
              id="name"
              value={name}
            />
            <Input
              label="Email"
              onChange={(any) => setEmail(any.target.value)}
              id="email"
              type="email"
              value={email}
            />
            <Input
              label="Password"
              onChange={(any) => setPassword(any.target.value)}
              id="password"
              type="password"
              value={password}
            />
          </div>
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10  hover:bg-red-700 transition">
            Login
          </button>
          <p className="mt-12 text-neutral-500">
            FIRST TIME USING NETFLIX?
            <span className="text-white ml-1 hover:underline cursor-pointer">
              Creat and account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Auth;
