import React from 'react'
interface ChildProps {
	closeModal: (a: boolean) => void
}

const Modal = ({ closeModal }: ChildProps) => {
	return (
		<div className='w-[960px] h-[480px]'>
			<div className='text-lg'>Please view on desktop!</div>
			<button onClick={()=>closeModal(false)}>Close </button>
		</div>
	)
}

export default Modal
