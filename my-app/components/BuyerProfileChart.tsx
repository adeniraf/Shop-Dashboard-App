import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

interface ICustomizedLabel {
	cx: number
	cy: number
	midAngle: number
	innerRadius: number
	outerRadius: number
	percent: number
	index: number
}

const BuyerProfileChart = () => {
	const data = [
		{ name: 'Group A', value: 600 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
	]

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

	const RADIAN = Math.PI / 180
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}: ICustomizedLabel): void => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5
		const x = cx + radius * Math.cos(-midAngle * RADIAN)
		const y = cy + radius * Math.sin(-midAngle * RADIAN)
	}

	return (
		<div className='w-full h-[22rem] bg-white mx-2 p-2 rounded-sm border border-gray-200 flex flex-col flex-1'>
			<strong className='text-gray-700 font-medium'>Buyer Profile</strong>
			<div className='w-full h-full mt-3 flex-1 text-xs'>
				<ResponsiveContainer
					width='99%'
					height='99%'>
					<PieChart
						width={400}
						height={400}>
						<Pie
							data={data}
							cx='50%'
							cy='50%'
							labelLine={false}
							// label={renderCustomizedLabel}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default BuyerProfileChart
