import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Anandy Velasquez',
  description: 'Sitio personal de Anandy Velasquez - Escritora y Actriz',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Anandy Velasquez - Escritora y actriz
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              molestie diam eros, eu consectetur ligula blandit at. Praesent est
              augue, molestie non tincidunt ac, consequat imperdiet lorem. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc
              lacus, cursus vel ultricies et, auctor vel enim. Cras pulvinar
              ultrices varius.
            </p>
            <p>
              Proin id hendrerit justo. Suspendisse sed urna vel erat suscipit
              imperdiet. Maecenas tempus eu metus in porttitor. Cras sapien
              nulla, aliquam non ultricies vel, blandit ut sapien. Pellentesque
              fermentum suscipit lacus et auctor. Aliquam pretium suscipit
              auctor. Nullam sed cursus mauris. Proin blandit sit amet tortor
              non accumsan.
            </p>
            <p>
              Maecenas at leo id massa viverra lacinia in id eros. Maecenas at
              dui congue, volutpat sapien viverra, fringilla nunc. Donec
              malesuada ultricies pellentesque. Fusce risus turpis, consectetur
              sit amet tellus eu, porttitor posuere elit.
            </p>
            <p>
              Nullam vehicula mi justo, feugiat bibendum metus ullamcorper ut.
              Donec ullamcorper non nibh bibendum congue. Cras sed velit
              convallis dolor laoreet tincidunt. In hac habitasse platea
              dictumst. Nunc varius vehicula augue, aliquam blandit nulla
              blandit vel. Sed leo nunc, ultricies sed feugiat ut, varius non
              nunc.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/anaivelo/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Instagram
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/profile.php?id=61575137807208"
              icon={FacebookIcon}
              className="mt-4"
            >
              Facebook
            </SocialLink>
            <SocialLink
              href="mailto:ignus.nero@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ignus.nero@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
