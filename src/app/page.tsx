import Image from 'next/image'

import MainBaner from "../../public/MainBaner.svg";
import Link from "next/link";
import MainButton from '@/components/ui/mainButton/MainButton';

export default function Home() {
  return (
    <div className='flex min-h-screen max-w-screen-xl flex-col mx-auto'>
      <div className="mb-4">
        <Image
          src={MainBaner}
          alt="baner"
          width={1306}
          height={360}
          priority
          className="object-cover max-h-[360px]"
        />
      </div>
      <section className="px-4 flex flex-col">
        <Link href="/?catalog=true" className="md:hidden">
          <MainButton />
        </Link>
      </section>
    </div>
  )
}
