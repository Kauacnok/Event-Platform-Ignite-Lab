import { RocketseatLogo } from './RocketseatLogo'

export function Footer() {
	return (
		<footer className="w-full pt-6 h-[70px] flex flex-col items-center justify-between border-t border-gray-600 text-gray-400 md:flex-row md:pt-0">
			<div className="flex flex-col ml-2 gap-6 items-center md:flex-row">
				<RocketseatLogo />
				<p className="text-sm mb-4 md:mb-0">
					Rocketseat - Todos os direitos reservados
				</p>
			</div>
			<div className="flex items-center md:mr-8">
				<p className="text-sm mb-6 md:mb-0">
					Políticas de privacidade
				</p>
			</div>
		</footer>
	)
}