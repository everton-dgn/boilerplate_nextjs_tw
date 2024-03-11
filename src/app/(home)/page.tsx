import Image from 'next/image'

import { CounterButton } from 'components/atoms'

const Home = () => (
  <div className="h-full grow p-16 center col-full">
    <header className="mb-32 text-center text-32 font-600" role="banner">
      Boilerplate
    </header>
    <main className="h-fit p-0 center col g-32">
      <div className="flex-wrap px-8 py-0 jc-center row-full g-32">
        <Image
          alt="Logo Nextjs"
          height={77}
          priority
          src="/images/logo_nextjs.webp"
          width={77}
          className="relative sm:size-[155px] sm:min-w-[155px]"
        />
        <Image
          alt="Logo React"
          height={77}
          priority
          src="/images/logo_react.svg"
          width={87}
          className="relative sm:h-[155px] sm:w-[174px] sm:min-w-[174px]"
        />
      </div>
      <h1 className="text-center text-32 font-500">Nextjs + React</h1>
      <CounterButton />
    </main>
  </div>
)

export default Home
