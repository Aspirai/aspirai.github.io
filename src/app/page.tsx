import Link from "next/link";
import '../public/styles/home.scss';

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen header'>
      <h1 className='text-4xl font-bold'>Hello, World!</h1>
      <Link href='/dashboard'> Dashboard</Link>
    </div>
  );
}
