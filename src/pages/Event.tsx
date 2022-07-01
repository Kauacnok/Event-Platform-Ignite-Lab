import { useState } from 'react'
import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Sidebar } from '../components/Sidebar'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function Event() {
	const { slug } = useParams<{ slug: string }>()
	const [isMenuOpen, setIsMenuOpen] = useState(true)

	return (
		<div className="flex flex-col min-h-screen">
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
			<main className="flex flex-1">
				{ slug 
					? <Video lessonSlug={slug} isMenuOpen={isMenuOpen}/> 
					: <div className="flex-1"></div>}
				<Sidebar isMenuOpen={isMenuOpen} />
			</main>
			{isMenuOpen ? <Footer /> : "" }
		</div>
	)
}