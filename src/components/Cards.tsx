import { Lightning, FileArrowDown, CaretRight, ImageSquare } from 'phosphor-react'

interface CardsProps {
	title: string,
	content: string,
	type: 'ComplementaryMaterial' | 'Wallpaper',
	link: string
}

export function Cards(props: CardsProps) {

	return (
		<a href={props.link} className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
			<div className="bg-green-700 h-full p-6 flex items-center">
				{props.type === 'ComplementaryMaterial' ? <FileArrowDown size={40} /> : <ImageSquare size={40} />}
			</div>
			<div className="py-6 leading-relaxed">
				<strong className="text-2xl ">{props.title}</strong>
				<p className="text-sm text-gray-200 mt-2">
					{props.content}
				</p>
			</div>
			<div className="h-full p-6 flex items-center">
				<CaretRight size={24} />
			</div>
		</a>
	)
}