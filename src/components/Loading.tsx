import { CircleNotch } from 'phosphor-react'

export function Loading() {
	return (
		<div className="flex flex-col items-center justify-center h-full w-full max-w-[1180px] max-h-[60vh] aspect-video">
			<CircleNotch size={32} className="animate-spin" />
			<p className="text-4xl">Carregando...</p>
		</div>
	)
}