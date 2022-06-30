import { Logo } from '../components/Logo'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
	const navigate = useNavigate()

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")

	const [createSubscriber, { loading }] = useCreateSubscriberMutation()

	async function handleSubscribe(event: FormEvent) {
		event.preventDefault()

		await createSubscriber({
			variables: {
				name,
				email,
			}
		})

		navigate('/event')
	}

	return (
		<div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
			<div className="w-full max-w-[1100px] flex flex-col gap-10 text-center items-center justify-between mt-10 mx-auto md:flex-row md:text-left md:gap-0 md:mt-20">
				<div className="max-w-[640px] ">
					<Logo setStyleOnLogo={true} />

					<h1 className="mt-8 text-[2.5rem] leading-tight">
						Construa uma <strong className="text-blue-500">aplicação</strong> do zero, com <strong className="text-blue-500">React JS</strong>
					</h1>
					<p className="mt-4 text-gray-200 leading-relaxed">
						Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
					</p>
				</div>

				<div className="p-8 w-[100%] bg-gray-700 border-y border-gray-500 md:w-auto md:border md:rounded">
					<strong className="text-2xl mb-6 block">Increva-se gratuitamente</strong>
					<form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
						<input 
							className="bg-gray-900 rounded px-5 h-14"
							type="text" 
							placeholder="Seu nome completo" 
							onChange={event => setName(event.target.value)}
						/>	
						<input 
							className="bg-gray-900 rounded px-5 h-14"
							type="email" 
							placeholder="Digite seu email" 
							onChange={event => setEmail(event.target.value)}
						/>

						<button 
							className="mt-4 bg-green-500 border border-green-500 rounded uppercase py-4 font-bold text-sm hover:bg-green-700 hover:border-green-700 transition-colors disabled:opacity-50"
							type="submit"
							disabled={loading}
						>
							Garantir minha vaga
						</button>
					</form>
				</div>
			</div>

			<img src="https://raw.githubusercontent.com/Kauacnok/Event-Platform-Ignite-Lab/main/src/assets/code-mockup.png" alt="example layout of website" className="mb-4 md:mb-0" />
		</div>
	)
}