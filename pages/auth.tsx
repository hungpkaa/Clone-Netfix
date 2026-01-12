import { useState, useCallback } from 'react';
import Input from '@/components/input';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/60">
        {/* NAV */}
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>

        {/* FORM WRAPPER */}
        <div className="flex justify-center">
          <div className="mt-16 w-full max-w-md rounded-md bg-black/70 px-16 py-16">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>

            {/* INPUTS */}
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>

            {/* BUTTON */}
            <button className="mt-10 w-full rounded-md bg-red-600 py-3 text-white hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>

            {/* FOOTER */}
            <p className="mt-12 text-neutral-500 text-sm">
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already have an account?'}
              <span
                onClick={toggleVariant}
                className="ml-1 text-white hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
