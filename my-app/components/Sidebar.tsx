'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RxDashboard } from 'react-icons/rx'
import { LuPackage, LuShoppingCart } from 'react-icons/lu'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { IoPeopleOutline } from 'react-icons/io5'
import { GrTransaction } from 'react-icons/gr'
import { FaRegMessage } from 'react-icons/fa6'
import { FcBullish } from 'react-icons/fc'

import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineLogout,
} from 'react-icons/hi'

const Sidebar = () => {
	const sideNav = [
		{ name: 'Dashboard', href: '/', icon: <HiOutlineViewGrid /> },
		{ name: 'Products', href: '/products', icon: <HiOutlineCube /> },
		{ name: 'Orders', href: '/orders', icon: <HiOutlineShoppingCart /> },
		{ name: 'Customers', href: '/customers', icon: <HiOutlineUsers /> },
		{
			name: 'Transactions',
			href: '/transactions',
			icon: <HiOutlineDocumentText />,
		},
		{ name: 'Messages', href: '/messages', icon: <HiOutlineAnnotation /> },
	]

	const bottomNav = [
		{ name: 'Settings', href: '/', icon: <HiOutlineCog /> },
		{
			name: 'Help & Support',
			href: '/',
			icon: <HiOutlineQuestionMarkCircle />,
		},
		{ name: 'Logout', href: '/', icon: <HiOutlineLogout /> },
	]
	const currentRoute = usePathname()

	return (
		<nav className='bg-neutral-900 p-4 h-full w-56 flex flex-col  justify-between text-neutral-100'>
			<div>
				<div className='mb-8 flex gap-2 items-center px-1 py-3 text-neutral-100 text-lg'>
					<FcBullish />
					OpenShop
				</div>
				<div>
					<ul className='flex flex-col gap-1'>
						{sideNav.map((item) => {
							return (
								<Link
									key={item.name}
									href={item.href}>
									<li
										className={`${
											currentRoute === item.href
												? 'bg-neutral-700 text-neutral-100'
												: 'text-neutral-400'
										}  flex items-center gap-2 font-light px-1 py-2 rounded-sm text-base hover:bg-neutral-700`}>
										{item.icon}
										{item.name}
									</li>
								</Link>
							)
						})}
					</ul>
				</div>
			</div>
			<div className='border-t border-neutral-700 text-neutral-100'>
				<ul className='mt-4'>
					{bottomNav.map((item) => {
						return (
							<li
								key={item.name}
								className='hover:bg-neutral-700 font-light px-1 py-2 rounded-sm text-base'>
								<Link
									href={item.href}
									className={`${
										item.name === 'Logout' && 'text-red-500'
									} flex flex-row items-center gap-2`}>
									{item.icon}
									{item.name}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}

export default Sidebar
