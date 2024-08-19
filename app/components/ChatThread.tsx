import Image from 'next/image'
import profileImage from '../../public/profile1.jpg'
import Link from 'next/link'

export default function ChatThread() {
	return (
		<Link
			href='*'
			className='flex flex-row items-center justify-start h-20 p-1 gap-6'>
			<div>
				<Image
					className='w-14 h-14 rounded-full'
					src={profileImage}
					alt='profile image'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<h1 className='font-bold'>Friends name goes here</h1>
				<p className='text-gray-400 w-[280px] sm:w-[600px] md:w-[640px] lg:w-[840px] xl:w-[1200px] text-nowrap overflow-hidden text-ellipsis'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, suscipit
					blanditiis modi assumenda fugiat dolorum, ea excepturi eligendi fugit quasi
					alias reprehenderit iure nihil enim inventore voluptate animi at
					consequuntur.
				</p>
			</div>
		</Link>
	)
}
