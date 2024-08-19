import Image from 'next/image'
import logo from '../../public/logo.png'
import googleButton from '../../public/google_button.png'

interface Props {
	isSignupPage: boolean
}

export default function LoginSignup({ isSignupPage }: Props) {
	return (
		<div className='flex flex-col justify-around items-center w-screen h-[80vh]'>
			<div className='p-2 flex flex-col justify-around items-center gap-4'>
				{isSignupPage && (
					<div>
						<h1 className='text-center font-semibold text-xl'>
							Welcome to Nxt Messenger
						</h1>
						<p className='-mt-1 text-lg text-center'>Create an account to connect</p>
					</div>
				)}

				{!isSignupPage && (
					<div>
						<h1 className='text-center font-semibold text-xl'>
							Welcome back to Nxt Messenger
						</h1>
						<p className='-mt-1 text-lg text-center'>Login to connect</p>
					</div>
				)}

				<Image
					className='w-32 h-32 bg-white rounded-full'
					src={logo}
					alt='Next Messenger Logo'
				/>
			</div>
			<form className='flex flex-col gap-8 justify-center items-center w-screen'>
				<input
					className='shadow appearance-none border rounded w-[80%] lg:w-[60%] xl:w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					type='email'
					placeholder='Email'
					autoComplete='false'
				/>

				{isSignupPage && (
					<input
						className='shadow appearance-none border rounded w-[80%] lg:w-[60%] xl:w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='User Name'
						autoComplete='false'
					/>
				)}

				<input
					className='shadow appearance-none border rounded w-[80%] lg:w-[60%] xl:w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					type='password'
					placeholder='Password'
					autoComplete='false'
				/>

				{isSignupPage && (
					<input
						className='shadow appearance-none border rounded w-[80%] lg:w-[60%] xl:w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='password'
						placeholder='Confirm Password'
						autoComplete='false'
					/>
				)}

				<button
					className='mt-6 bg-sky-200 p-1 w-[80%] lg:w-[60%] xl:w-[50%] hover:active:bg-sky-300 h-10 rounded'
					type='submit'>
					{isSignupPage ? 'Sign up' : 'Login'}
				</button>
			</form>

			{isSignupPage ? (
				<p>
					Already have an account?{' '}
					<a className='text-blue-300' href='/login'>
						Click here
					</a>
				</p>
			) : (
				<p>
					Don't have an account?{' '}
					<a className='text-blue-300' href='/signup'>
						Click here
					</a>
				</p>
			)}

			<div className='mt-4'>
				<Image className='w-64 h-14' src={googleButton} alt='google signin' />
			</div>
		</div>
	)
}
