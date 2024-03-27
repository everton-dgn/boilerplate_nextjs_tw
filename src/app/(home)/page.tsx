import Image from 'next/image'

import { CounterButton } from 'components/atoms'

const Home = () => (
  <div className="h-full grow p-16 col-full center">
    <header className="mb-5 text-center fs-3xl-semibold" role="banner">
      Boilerplate
    </header>
    <main className="h-fit p-0 col center g-5">
      <div className="px-4 py-0 f-wrap g-5 jc-center row-full">
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
      <h1 className="text-center fs-3xl-medium">Nextjs + React</h1>
      <CounterButton />
    </main>
  </div>
)

export default Home
