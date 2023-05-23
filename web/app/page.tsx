import { User } from 'lucide-react'
import Logo from './assets/logo.svg'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 ">
      {/* right */}
      <div className="relative bg-[url(./assets/stars.svg)] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border border-white/10">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[520px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* sign in */}
        <a href=""
          className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500' />
          </div>
          <p className='text-sm leading-snug w-[140px]'>
            <span>Crie sua conta</span> e salve suas memórias!
          </p>
        </a>
        {/* hero*/}
        <div className='space-y-5 '>
          <Image src={Logo} alt='spacetime' />
          <div className='max-w-[420px] space-y-1'>
            <h1 className='mt-5 text-4xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'>
              Colecione momentos marcantes da sua jornada e compartilhe (se quiesr) com o mundo!
            </p>
          </div>
          <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600" href='' >CADASTRAR LEMBRANÇAS</a>
        </div>
        {/* copyright */}
        <div className="text-sm leading-relaxed text-gray-200">Feito com 💜 no NLW da {' '}
          <a
            target='_blank'
            rell="noreferrer"
            className="underline hover:text-gray-100" href="http://rocketseat.com.br">Rocketseat</a>
        </div>
      </div>


      {/* right */}
      <div className="flex flex-col p-16 bg-[url(./assets/stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
