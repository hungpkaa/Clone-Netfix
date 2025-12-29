import Input from '@/components/input';
export default function Auth() {
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
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}
