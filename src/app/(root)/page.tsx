import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import cheemsBless from '../../../public/cheems_bless.png';
import deadEmoji from '../../../public/dead.png';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--JetBrains_Mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <p className="font-bold text-lg">
          {' '}
          ... not another nextjs starter template 🤦🏻...
        </p>
        <Image src={deadEmoji} alt="dead emoji" width={50} height={50} />
        <p> ... with shadcn components and supabase! </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/login">
            <Button variant="reverse">Login</Button>
          </Link>
          <Link href="/about">
            <Button variant="reverse">About</Button>
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/wagnerjw/nextjs-app-template/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Check Out The Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-semibold"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          made in sunny Santa Barbara, CA 🌴
          <Image
            src={cheemsBless}
            alt="cheems bless emoji"
            width={20}
            height={20}
          />
        </a>
      </footer>
    </div>
  );
}
