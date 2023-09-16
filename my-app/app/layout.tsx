import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Shopping Dashboard App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} flex flex-row h-screen w-full bg-neutral-100`}>
				<Sidebar />

				<div className='flex flex-col w-full h-full'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
