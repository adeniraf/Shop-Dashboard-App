'use client'

import React, { useState, Fragment } from 'react'
import {
	HiOutlineAnnotation,
	HiOutlineBell,
	HiOutlineChatAlt,
	HiOutlineSearch,
	HiChevronDown,
} from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import Image from 'next/image'

const Header = () => {
	const [search, setSearch] = useState('')

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const event = e.target as HTMLInputElement
		const ans = event.value
		setSearch(ans)
	}

	return (
		<section className='flex h-16 px-4 py-2 items-center justify-between w-full bg-white'>
			<div className='relative'>
				<HiOutlineSearch
					size={20}
					className='absolute left-3 text-slate-400 top-1/2 -translate-y-1/2'
				/>

				<input
					type='search'
					name='search'
					placeholder='Search...'
					className='border tracking-normal text-black rounded-sm border-slate-200 text-sm h-10 w-96 pl-11 px-4 focus:outline-none active:outline-none'
					onChange={handleChange}
				/>
			</div>
			<div className='flex items-center gap-2 text-gray-700'>
				<Popover className='relative'>
					{({ open }) => (
						<>
							<Popover.Button
								className={`${
									open && 'bg-gray-100'
								} inline-flex p-1.5 rounded-sm hover:bg-gray-100 focus:outline-none active:bg-grey-100`}>
								<HiOutlineChatAlt size={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'>
								<Popover.Panel className='absolute w-96 right-0 z-10 mt-2.5 '>
									<div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity px-2 py-2.5'>
										<strong className='text-gray-700 font-bold'>
											Messages (0)
										</strong>
										<div className='mt-2 py-1 text-sm'>
											You have no new messages.
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover className='relative'>
					{({ open }) => (
						<>
							<Popover.Button
								className={`${
									open && 'bg-gray-100'
								} inline-flex p-1.5 rounded-sm hover:bg-gray-100 focus:outline-none active:bg-grey-100`}>
								<HiOutlineBell size={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter='transition ease-out duration-200'
								enterFrom='opacity-0 translate-y-1'
								enterTo='opacity-100 translate-y-0'
								leave='transition ease-in duration-150'
								leaveFrom='opacity-100 translate-y-0'
								leaveTo='opacity-0 translate-y-1'>
								<Popover.Panel className='absolute w-96 right-0 z-10 mt-2.5 '>
									<div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity px-2 py-2.5'>
										<strong className='text-gray-700 font-bold'>
											Notifications (0)
										</strong>
										<div className='mt-2 py-1 text-sm'>
											You have no new notifications.
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Menu
					as='div'
					className='relative inline-block text-left'>
					<div>
						<Menu.Button className='ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400'>
							{/* <Image
								alt='profile pic'
								src=''></Image> */}
							<span className='sr-only'>Open user menu</span>
							<div
								className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
								style={{
									backgroundImage: `url("https://source.unsplash.com/80x88?face")`,
								}}></div>
							<div>
								<span className='sr-only'>Hugh Jackson</span>
							</div>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'>
						<Menu.Items className='origin-top-right z-10 absolute right-0 mt-2 w-40 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none '>
							<Menu.Item>
								{({ active }) => (
									<div className='flex flex-col gap-2'>
										<button className='text-gray-700 focus:bg-gray-200 hover:bg-neutral-100 rounded-sm px-4 py-2'>
											Your Profile
										</button>
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div className='flex flex-col gap-2'>
										<button className='text-gray-700 focus:bg-gray-200 hover:bg-neutral-100 rounded-sm px-4 py-2'>
											Settings
										</button>
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div className='flex flex-col gap-2'>
										<button className=' focus:bg-gray-200 hover:bg-neutral-100 text-red-500 rounded-sm px-4 py-2'>
											Sign Out
										</button>
									</div>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</section>
	)
}

export default Header
