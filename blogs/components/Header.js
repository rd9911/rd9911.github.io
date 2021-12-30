import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className='container'>
                {/* eslint-disable @next/next/link-passhref */}
                <Link href='/'>
                    <h2><Link href='/' passHref>rd9911</Link></h2>
                </Link>
            </div>
        </header>
    )
}
