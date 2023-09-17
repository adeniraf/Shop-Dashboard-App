import React, { PureComponent } from 'react'
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

import { transactionData } from '@/data/data'

const TransactionChart = () => {
	console.log(transactionData)
	return (
		<div className='w-full h-[22rem] bg-white mx-2 p-2 rounded-sm border border-gray-200 flex flex-col flex-1'>
			<strong className='text-gray-700 font-medium'>Transactions</strong>
			<div className='w-full h-full mt-3 flex-1 text-xs'>
				<ResponsiveContainer
					width='99%'
					height='99%'>
					<BarChart
						width={500}
						height={300}
						data={transactionData}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0,
						}}>
						<CartesianGrid
							strokeDasharray='3 3'
							vertical={false}
						/>
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey='income'
							fill='#0ea5e9'
						/>
						<Bar
							dataKey='expense'
							fill='#ea580c'
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default TransactionChart
