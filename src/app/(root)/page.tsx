import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--JetBrains_Mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <p className=" text-lg">not another nextjs starter template 🤦🏻</p>
        <p className="text-sm"> ... with shadcn components and supabase! </p>

        <div className="flex gap-4 items-center sm:flex-row">
          <Link href="/login">
            <Button variant="reverse">Login</Button>
          </Link>
          <Link href="/about">
            <Button variant="reverse">About</Button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 pl-16 flex gap-40">
        <a
          className="flex flex-auto items-center gap-2 hover:underline hover:underline-offset-4 hover:font-bold"
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
          check out the github
        </a>
        <a
          className="flex flex-auto items-center gap-2 hover:underline hover:underline-offset-4 hover:font-bold"
          href="https://shorelinebeachcafe.com/surf-cams/"
          target="_blank"
          rel="noopener noreferrer"
        >
          made in Santa Barbara, CA 🌴
        </a>
      </footer>
    </div>
  );
}
