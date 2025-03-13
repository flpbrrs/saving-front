'use client'

import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { TbLogout as IconLogout } from "react-icons/tb"

interface BannerProps {
    nomeUsuarioLogado: string
}

export default function AppBanner(props: BannerProps) {
    const { logout } = useAuth()

    return (
        <section className="bg-green-950 text-white h-fit pt-8 pb-16 px-4 bg-[url(/dollar-bg.jpg)] bg-blend-overlay bg-opacity-90">
            <article className="max-w-5xl mx-auto">
                <div className="flex gap-2 items-center justify-center">
                    <Image src="/savings_logo.svg" alt="Savings logo" width={36} height={36} className="filter brightness-0 invert"/>
                    <div className="border-l border-white pl-2 leading-none flex-1">
                        <h1 className="text-2xl font-extrabold  leading-1">Bem-vindo(a) de volta ao Savings</h1>
                        <small className="leading-none ">@{props.nomeUsuarioLogado.split(' ').join('_')}</small>
                    </div>
                    <button className="
                        bg-red-700/10 p-2 rounded-lg 
                        text-red-700 border border-red-700 
                        flex gap-2 items-center
                        hover:text-white hover:bg-red-400 hover:font-bold"
                        onClick={() => logout()}
                    >
                        <IconLogout size={24}/>
                        <small>Sair</small>
                    </button>
                </div>
            </article>
        </section>
    )
}