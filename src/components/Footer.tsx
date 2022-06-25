import { RocketseatLogo } from './RocketseatLogo'

export function Footer() {
	return (
		<footer className="w-full h-[70px] flex items-center justify-between border-t border-gray-600 text-gray-400">
			<div className="flex ml-2 gap-6 items-center">
				<RocketseatLogo />
				<p className="text-sm">
					Rocketseat - Todos os direitos reservados
				</p>
			</div>
			<div className="flex mr-8 items-center">
				<p className="text-sm">
					Políticas de privacidade
				</p>
			</div>
		</footer>
	)
}