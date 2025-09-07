'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Star, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { TikTokIcon } from '@/components/icons';

export default function Home() {
  const socialLinks = [
    {
      href: 'https://onlyfans.com/baby_tatiana',
      icon: <Star className="h-5 w-5" />,
      label: 'OnlyFans Exclusivo',
    },
    {
      href: 'https://instagram.com/angie_monsalvex',
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
    },
    {
      href: 'https://twitter.com/angie_monsalvex',
      icon: <Twitter className="h-5 w-5" />,
      label: 'Twitter / X',
    },
    {
      href: 'https://tiktok.com/@angie_monsalvex',
      icon: <TikTokIcon className="h-5 w-5" />,
      label: 'TikTok',
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 font-body">
      <Image
        src="/background.jpg"
        alt="Seductive background"
        fill
        className="object-cover -z-10"
        quality={80}
        priority
        data-ai-hint="boudoir background"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="w-full max-w-md animate-fade-in rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 shadow-2xl text-center text-white">
        <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Angie Monsalve"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              priority
              data-ai-hint="sensual portrait"
            />
        </div>

        <h1 className="mt-4 text-3xl font-bold font-headline">Angie Monsalve</h1>

        <p className="mt-2 mb-8 text-base text-gray-200">
          ¿Te gusta que te seduzcan? 🔥 Mi contenido más exclusivo está hecho para volar tu cabeza. Entra y descubre por qué no te arrepentirás. Te estoy esperando...
        </p>

        <div className="flex w-full flex-col space-y-4">
          {socialLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              className="w-full transform transition-transform duration-300 hover:scale-105 shadow-lg shadow-primary/30"
              size="lg"
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
