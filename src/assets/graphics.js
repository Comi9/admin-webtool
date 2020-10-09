import React from 'react'

export const FITS_LOGO = (background='black', text='white') => {
	return (
		<svg width="394" height="394" viewBox="0 0 394 394" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0)">
				<path d="M393.8 0H0V393.8H393.8V0Z" fill={text} />
				<path d="M115.2 100.7H157.7V83.2H93.1001V170.4H115.3V138.2H154.4V120.8H115.3V100.7H115.2ZM136.4 240.5H162.7V222.6H88.1001V240.5H114.1V309.9H136.3V240.5H136.4ZM257.2 170.4H279.4V83.2H257.2V170.4ZM297.1 248.7L305.4 231.4C296.4 225.5 283.6 221.7 271 221.7C250.1 221.7 236.2 231.9 236.2 248C236.2 278.9 282.3 269.7 282.3 285.1C282.3 290.1 277.9 292.7 271 292.7C261.9 292.7 248.4 287.5 239.5 279.6L230.9 296.7C241.2 305.2 256.2 310.7 270.8 310.7C290.2 310.7 305.7 301.5 305.7 284C305.7 252.5 259.6 261.1 259.6 246C259.6 241.8 263.5 239.6 269.2 239.6C276.3 239.6 287.9 243.3 297.1 248.7Z" fill={background} />
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="393.8" height="393.8" fill={text} />
				</clipPath>
			</defs>
		</svg>

	)
}