'use client'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Image from 'next/image'
import Dashboard from '@/components/Dashboard'
import Modal from '@/components/Modal'

export default function Home() {
	const [modalOpen, setModalOpen] = useState(true)

	const closeModal = (value: boolean) => {
		setModalOpen(value)
	}

	console.log(modalOpen)

	return (
		<section className='flex flex-col w-full h-full'>
			{modalOpen ? <Modal closeModal={closeModal} /> : <Dashboard />}
		</section>
	)
}
