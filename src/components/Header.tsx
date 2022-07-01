import { X, List } from 'phosphor-react'
import { Logo } from './Logo'

interface propsHeader {
	isMenuOpen: boolean,
	setIsMenuOpen: any,
}

export function Header({isMenuOpen, setIsMenuOpen}: propsHeader) {

	function toggleMenu() {
		isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
	}

	return (
		<header className="w-full py-5 flex items-center justify-between bg-gray-700 border-b border-gray-600 md:justify-center">
			<div className="ml-5 md:ml-0">
				<Logo setStyleOnLogo={false} />
			</div>
			
			<p className="block pl-8 md:hidden">Aulas</p>
			<div onClick={toggleMenu} className="block p-2 mr-5 rounded-full cursor-pointer hover:bg-gray-500 md:hidden md:mr-0 transition">
				{ isMenuOpen ? <List size={40} color="#81D8F7"/> : <X size={40} color="#81D8F7" />}
			</div>
		</header>
	)
}
