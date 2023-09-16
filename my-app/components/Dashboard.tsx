import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'

const Dashboard = () => {
	return (
		<div className='flex flex-col gap-4'>
			<DashboardStatsGrid />
			<div className='flex flex-row gap-4 w-full h-full'>
				<TransactionChart />
				<BuyerProfileChart />
			</div>
		</div>
	)
}

export default Dashboard