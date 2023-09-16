import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

interface Props {
	children?: React.ReactNode
}

const DashboardStatsGrid = () => {
	return (
		<div className='flex gap-4 px-2 py-2'>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500 mr-4'>
					<IoBagHandle className='text-2xl text-white' />
				</div>
				<div>
					<span className='text-neutral-500 text-sm'>Total Sales</span>
					<div>
						<strong className='mr-2.5'>$76425.45</strong>
						<span className='text-green-500 text-sm '>+234</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500 mr-4'>
					<IoBagHandle className='text-2xl text-white' />
				</div>
				<div>
					<span className='text-neutral-500 text-sm'>Total Sales</span>
					<div>
						<strong className='mr-2.5'>$76425.45</strong>
						<span className='text-green-500 text-sm '>+117</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500 mr-4'>
					<IoBagHandle className='text-2xl text-white' />
				</div>
				<div>
					<span className='text-neutral-500 text-sm'>Total Sales</span>
					<div>
						<strong className='mr-2.5'>$76425.45</strong>
						<span className='text-red-500 text-sm '>-27</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600 mr-4'>
					<IoBagHandle className='text-2xl text-white' />
				</div>
				<div>
					<span className='text-neutral-500 text-sm'>Total Sales</span>
					<div>
						<strong className='mr-2.5'>$76425.45</strong>
						<span className='text-red-500 text-sm '>-53</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

export default DashboardStatsGrid

function BoxWrapper({ children }: Props) {
	return (
		<div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center text-neutral-900'>
			{children}
		</div>
	)
}
