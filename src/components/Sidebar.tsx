import { Lesson } from './Lesson'
import { useGetLessonsQuery } from '../graphql/generated'
import classNames from 'classnames'

interface propsSidebar {
	isMenuOpen: boolean,
}

export function Sidebar({ isMenuOpen }: propsSidebar) {
	const { data } = useGetLessonsQuery()

	return (
		<aside className={classNames("w-[348px] bg-gray-700 p-6 border-l border-gray-600 md:block", {
			'hidden md:block': isMenuOpen,
			'block absolute w-[100%] md:relative md:w-auto md:h-auto': !isMenuOpen
		})}>

			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
				Cronograma de aulas
			</span>

			<div className="flex flex-col gap-8">
				{data?.lessons.map(lesson => {
					return (
						<Lesson 
							key={lesson.id}
							title={lesson.title}
							slug={lesson.slug}
							availableAt={new Date(lesson.availableAt)}
							type={lesson.lessonType}
						/>
					)
				})}
			</div>
		</aside>
	)
}