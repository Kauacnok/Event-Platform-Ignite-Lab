import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'

import classNames from 'classnames'

interface LessonProps {
	title: string,
	slug: string,
	availableAt: Date,
	type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
	const { slug } = useParams<{ slug: string }>()

	const isLessonAvailable = isPast(props.availableAt)
	const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM 'de' yyyy ' • 'k'h'mm", {
		locale: ptBR
	})

	const isActiveLesson = slug === props.slug

	return (
		<Link to={ isLessonAvailable ? `/event/lesson/${props.slug}` : '/event/'} className={classNames("group", {
			'cursor-not-allowed': !isLessonAvailable
		})} >
			<span className="text-gray-300">
				{availableAtDateFormatted}
			</span>

			<div 
				className={classNames('rounded border border-gray-500 p-4 mt-2', {
					'bg-green-500': isActiveLesson,
					'group-hover:border-green-500': isLessonAvailable
				})}
			>
				<header className="flex items-center justify-between">
					{isLessonAvailable ? 
						(
							<span className={classNames("text-sm text-blue-500 font-medium flex items-center gap-2", {
								'text-white': isActiveLesson,
								'text-blue-500': !isActiveLesson
								})}
							>
								<CheckCircle size={20} />
								Conteúdo Liberado
							</span>
						) : (
							
							<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
								<Lock size={20} />
								Em breve
							</span>
						)
					} 
					<span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold", {
						'border-white': isActiveLesson,
						'border-green-300': isActiveLesson
					})}>
						{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<strong className={classNames("text-gray-300 mt-5 block", {
					'text-white': isActiveLesson,
					'text-gray-300': !isActiveLesson
				})}>
					{props.title}
				</strong>
			</div>
		</Link>
	)
}