'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import CallToActionLink from "@/components/CallToActionLink";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import Image from "next/image";

export default function LoginRegister() {
    const [change, setChange] = useState(false);

    return (
        <div className="bg-gray-50 h-screen flex p-4 gap-4 relative overflow-hidden">
            <motion.section
                initial={false}
                animate={{ x: change ? "0%" : "-100%" }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="min-w-96 flex flex-col gap-4 items-center justify-center absolute top-0 left-0 h-full bg-gray-50 w-1/2 transition-opacity duration-300"
            >   
                <CallToActionLink
                    label="Já tem uma conta?" CTA="Entrar"
                    action={() => setChange(!change)}
                />
                <div className="form-title">
                    Crie sua conta Savings
                </div>
                <div className="form-subtitle">
                    Preencha os campos abaixo para se cadastrar.
                </div>
                <RegisterForm 
                    isInRegisterContext={!change}
                    toogleToLogin={() => setChange(false)}
                />
            </motion.section>

            <motion.section
                initial={false}
                animate={{ x: change ? "100%" : "0%" }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="min-w-96 flex flex-col gap-3 items-center justify-center absolute top-0 right-0 w-1/2 h-full p-4 transition-opacity duration-300"
            >   
                <Image src="/savings_logo.svg" alt="Savings logo" width={48} height={48} />
                <div className="form-title">
                    Bem-vindo(a) ao Savings
                </div>
                <div className="form-subtitle">
                    Por favor, forneça suas credenciais para usar o app.
                </div>
                <LoginForm isInLoginContext={change}/>
                <CallToActionLink label="Ainda não tem conta?" CTA="Registre-se" action={() => setChange(!change)} />
            </motion.section>
            
            <motion.section
                initial={false}
                animate={{ x: change ? "100%" : "0%" }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="absolute top-0 left-0 w-1/2 h-full z-10"
            >
                <div className="px-4 h-full shadow-xl overflow-hidden">
                    <div className="w-full h-full flex justify-between gap-2">
                        <motion.div
                            initial={true}
                            animate={{
                                y: ["-50%", "0%", "-50%"]
                            }}
                            transition={{
                                duration: 25,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 0,
                            }}
                            className="flex flex-col gap-2 flex-1"
                        >
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl relative">
                                <Image src="/image-1.jpg" alt="Savings logo" className="rounded-2xl object-cover" fill />
                            </div>
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl bg-emerald-600 flex flex-col-reverse">
                                <span className="text-zinc-100 p-6 text-right text-xl font-semibold">
                                    <span className="italic">Cada centavo conta</span> – saiba para onde seu dinheiro está indo
                                </span>
                            </div>
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl relative">
                                <Image src="/image-4.jpg" alt="Savings logo" className="rounded-2xl object-cover" fill />
                            </div>
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl bg-amber-500" />
                        </motion.div>
                        <motion.div
                            initial={true}
                            animate={{
                                y: ["0%", "-50%", "0%"]
                            }}
                            transition={{
                                duration: 25,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 0,
                            }}
                            className="flex flex-col gap-2 flex-1"
                        >
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl bg-green-500" />
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl relative">
                                <Image src="/image-3.jpg" alt="Savings logo" className="rounded-2xl object-cover" fill />
                            </div>
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl bg-yellow-600 flex flex-col-reverse">
                                <span className="text-zinc-100 p-6 text-right text-xl font-bold">
                                    Evite surpresas no fim do mês. <span className="font-extrabold underline">Planeje, monitore e economize.</span>
                                </span>
                            </div>
                            <div className="w-full aspect-square flex-1 shrink-0 rounded-2xl relative">
                                <Image src="/image-2.jpg" alt="Savings logo" className="rounded-2xl object-cover" fill />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}