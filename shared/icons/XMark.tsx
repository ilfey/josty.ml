import { SVGProps } from 'react'

export default function XMark(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
		</svg>
	)
}
