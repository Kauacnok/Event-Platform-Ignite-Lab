import { RocketseatLogo } from './RocketseatLogo'

export function Footer() {
	return (
		<footer className="w-full pt-6 flex flex-col items-center justify-between border-t bg-gray-100 dark:bg-gray-700 dark:border-gray-600 text-gray-400 md:flex-row md:pt-0 md:h-[70px]">
			<div className="flex flex-col ml-2 gap-6 items-center md:flex-row">
				<RocketseatLogo />
				<p className="text-sm text-black-100 dark:text-gray-200 mb-4 md:mb-0">
					Rocketseat - Todos os direitos reservados
				</p>
			</div>
			<div className="flex items-center md:mr-8">
				<p className="text-sm text-black-100 dark:text-gray-200 mb-6 md:mb-0">
					Políticas de privacidade
				</p>
			</div>
		</footer>
	)
}