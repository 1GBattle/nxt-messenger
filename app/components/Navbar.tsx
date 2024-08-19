import Link from 'next/link'

export default function Navbar() {
	return (
		<div className='sticky top-0'>
			<nav className='h-12 bg-sky-100 p-2'>
				<Link href='/'>
					<h1 className='text-center text-xl font-semibold'>Nxt Messenger</h1>
				</Link>
			</nav>

			<div className='p-2 bg-white'>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					type='text'
					placeholder='Search Chats...'
				/>
			</div>
		</div>
	)
}
