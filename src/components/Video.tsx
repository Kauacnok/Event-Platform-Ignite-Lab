import { Player, Youtube, DefaultUi } from '@vime/react'
import { DiscordLogo, Lightning, FileArrowDown, CaretRight } from 'phosphor-react'
import { useGetLessonBySlugQuery } from '../graphql/generated'
import classNames from 'classnames'

import { Cards } from './Cards'

import '@vime/core/themes/default.css'

interface VideoProps {
	lessonSlug: string,
	isMenuOpen: boolean
}

export function Video({lessonSlug, isMenuOpen}: VideoProps) {
	const { data } = useGetLessonBySlugQuery({ 
		variables: {
			slug: lessonSlug
		}
	})

	if (!data || !data.lesson) {
		return (
			<div className="flex-1">
				<p>Carregando...</p>
			</div>
		)
	}

	return (
		<div className={classNames("flex-1", {
			'block': isMenuOpen,
			'hidden': !isMenuOpen
		})}>
			<div className="bg-black flex justify-center">
				<div className="h-full w-full max-w-[1180px] max-h-[60vh] aspect-video">
					<Player>
						<Youtube videoId={data.lesson.videoId} key={data.lesson.videoId}/>
						<DefaultUi />
					</Player>
				</div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start flex-col gap-16 md:flex-row">
					<div className="flex-1">
						<h1 className="text-2xl font-bold">
							{data.lesson.title}
						</h1>
						<p className="mt-4 text-gray-200 leading-relaxed">
							{data.lesson.description}
						</p>

						{data.lesson.teacher && (
							<div className="flex items-center gap-4 mt-6">
								<img 
									className="h-16 w-16 rounded-full border-2 border-blue-500"
									src={data.lesson.teacher.avatarURL}
									alt="" 
								/>

								<div className="leading-relaxed">
									<strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
									<span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
								</div>
						</div>
						)}
					</div>

					<div className="flex flex-col mx-auto gap-4 md:flex-row md:mx-0">
						<a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors md:w-auto ">
							<DiscordLogo size={24}/>
							Comunidade do Discord
						</a>
						<a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors md:w-auto">
							<Lightning size={24}/>
							Acesse o desafio
						</a>
					</div>
				</div>

				<div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
					<Cards title="Material Complementar" content="Acesse o material complementar para acelerar seu desenvolvimento" type="ComplementaryMaterial" link="#" />
					<Cards title="Wallpapers" content="Baixe os wallpapers exclusivos do Ignite" type="Wallpaper" link="#" />
				</div>
			</div>
		</div>
	)
}