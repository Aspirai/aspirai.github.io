import './page.scss';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='header'>
            <Link href='/' >Hello</Link>
        </div>
    );
}
