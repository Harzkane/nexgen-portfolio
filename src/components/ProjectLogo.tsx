"use client";

import React from "react";

interface ProjectLogoProps {
    name: string;
    className?: string;
}

export default function ProjectLogo({ name, className = "" }: ProjectLogoProps) {
    // Common styles based on Bruthol aesthetic: Bold rounded typography, minimalist icons
    const textStyle = "font-[700] tracking-tight text-zinc-900";

    switch (name) {
        case "Bruthol":
            return (
                <svg viewBox="0 0 260 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" y="18" width="46" height="46" rx="14" fill="#f97316" opacity="0.14" />
                    <path d="M31 28H46.5C53 28 57 31.7 57 37.4C57 42.2 53.9 45 48.8 45.5L58 54" stroke="#f97316" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M31 45.5H47.5C54.4 45.5 58.5 49 58.5 54.8C58.5 60.7 54.2 64 46.7 64H31" stroke="#f97316" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="78" y="52" className={textStyle} fontSize="30" fill="currentColor">Bru</text>
                    <text x="134" y="52" className={textStyle} fontSize="30" fill="#f97316">thol</text>
                </svg>
            );

        case "Glotrade":
            return (
                <svg viewBox="0 0 220 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38" cy="40" r="22" fill="#2563eb" opacity="0.14" />
                    <path d="M28 40h20M38 30a18 18 0 0 1 0 20M38 30a18 18 0 0 0 0 20" stroke="#2563eb" strokeWidth="4.5" strokeLinecap="round" />
                    <text x="68" y="52" className={textStyle} fontSize="30" fill="currentColor">Glo</text>
                    <text x="118" y="52" className={textStyle} fontSize="30" fill="#2563eb">trade</text>
                </svg>
            );

        case "AfriExchange (AfriX)":
            return (
                <svg viewBox="0 0 200 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="25" fill="#6366f1" opacity="0.15" />
                    <path d="M30 35H50M30 45H50M40 25L50 35L40 45" stroke="#6366f1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="75" y="52" className={textStyle} fontSize="32" fill="currentColor">Afri</text>
                    <text x="138" y="52" className={textStyle} fontSize="32" fill="#6366f1">X</text>
                </svg>
            );

        case "NaijaDevHub":
            return (
                <svg viewBox="0 0 220 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="30" height="30" rx="6" fill="#8b5cf6" opacity="0.15" />
                    <path d="M32 35L40 43L48 35" stroke="#8b5cf6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="70" y="52" className={textStyle} fontSize="28" fill="currentColor">Naija</text>
                    <text x="145" y="52" className={textStyle} fontSize="28" fill="#8b5cf6">Dev</text>
                </svg>
            );

        case "CryptoBills Nigeria":
            return (
                <svg viewBox="0 0 240 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 25C35 25 25 35 25 45S35 65 45 65H55C65 65 75 55 75 45S65 25 55 25H45Z" fill="#10b981" opacity="0.15" />
                    <text x="25" y="47" fill="#10b981" fontSize="24" fontWeight="bold" fontFamily="sans-serif">₿</text>
                    <text x="85" y="52" className={textStyle} fontSize="26" fill="currentColor">Crypto</text>
                    <text x="165" y="52" className={textStyle} fontSize="26" fill="#10b981">Bills</text>
                </svg>
            );

        case "RentHub":
            return (
                <svg viewBox="0 0 200 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 55V35L45 20L65 35V55H25Z" fill="#f43f5e" opacity="0.15" />
                    <path d="M35 55V45H55V55" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
                    <text x="80" y="52" className={textStyle} fontSize="30" fill="currentColor">Rent</text>
                    <text x="142" y="52" className={textStyle} fontSize="30" fill="#f43f5e">Hub</text>
                </svg>
            );

        case "Exonec":
            return (
                <svg viewBox="0 0 200 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 30C30 24.4772 34.4772 20 40 20H60C65.5228 20 70 24.4772 70 30V50C70 55.5228 65.5228 60 60 60H40C34.4772 60 30 55.5228 30 50V30Z" fill="#22c55e" opacity="0.15" />
                    <circle cx="50" cy="40" r="12" stroke="#22c55e" strokeWidth="5" />
                    <text x="85" y="52" className={textStyle} fontSize="32" fill="currentColor">Exonec</text>
                </svg>
            );

        case "PayUnify Nigeria":
            return (
                <svg viewBox="0 0 240 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="40" height="30" rx="8" fill="#3b82f6" opacity="0.15" />
                    <path d="M35 40H55" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                    <text x="80" y="52" className={textStyle} fontSize="28" fill="currentColor">Pay</text>
                    <text x="130" y="52" className={textStyle} fontSize="28" fill="#3b82f6">Unify</text>
                </svg>
            );

        case "PlugNG Shop":
            return (
                <svg viewBox="0 0 220 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 25L50 20L70 25V55L50 60L30 55V25Z" fill="#d946ef" opacity="0.15" />
                    <path d="M40 35L50 45L60 35" stroke="#d946ef" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="85" y="52" className={textStyle} fontSize="28" fill="currentColor">Plug</text>
                    <text x="145" y="52" className={textStyle} fontSize="28" fill="#d946ef">NG</text>
                </svg>
            );

        case "AquaFarm":
            return (
                <svg viewBox="0 0 230 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="46" height="40" rx="14" fill="#0f766e" opacity="0.14" />
                    <path d="M30 45C34 36 41 31 50 31C57 31 62 35 66 42C61 48 55 51 48 51C40 51 34 49 30 45Z" stroke="#0f766e" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 52C33 56 40 58 49 58C57 58 63 56 68 53" stroke="#0f766e" strokeWidth="4.5" strokeLinecap="round" />
                    <text x="82" y="52" className={textStyle} fontSize="28" fill="currentColor">Aqua</text>
                    <text x="148" y="52" className={textStyle} fontSize="28" fill="#0f766e">Farm</text>
                </svg>
            );

        case "NaijaTalk":
            return (
                <svg viewBox="0 0 240 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 34C24 25.7157 30.7157 19 39 19H55C63.2843 19 70 25.7157 70 34V45C70 53.2843 63.2843 60 55 60H45L35 67V60H39C30.7157 60 24 53.2843 24 45V34Z" fill="#f97316" opacity="0.14" />
                    <path d="M36 34H58M36 42H52" stroke="#f97316" strokeWidth="4.5" strokeLinecap="round" />
                    <text x="84" y="52" className={textStyle} fontSize="28" fill="currentColor">Naija</text>
                    <text x="156" y="52" className={textStyle} fontSize="28" fill="#f97316">Talk</text>
                </svg>
            );

        case "NEXGEN Hotel":
            return (
                <svg viewBox="0 0 250 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="22" y="18" width="48" height="44" rx="12" fill="#2563eb" opacity="0.14" />
                    <path d="M33 53V29H59V53M33 41H59M42 29V41M50 29V41" stroke="#2563eb" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="84" y="47" className={textStyle} fontSize="24" fill="currentColor">NEXGEN</text>
                    <text x="84" y="64" className={textStyle} fontSize="20" fill="#2563eb">Hotel</text>
                </svg>
            );

        case "TripCarry":
            return (
                <svg viewBox="0 0 250 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="44" cy="40" r="22" fill="#0f766e" opacity="0.14" />
                    <path d="M44 26C37 26 32 31.4 32 38.1C32 48.5 44 57 44 57C44 57 56 48.5 56 38.1C56 31.4 51 26 44 26Z" stroke="#0f766e" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="44" cy="38" r="3.5" fill="#0f766e" />
                    <text x="78" y="52" className={textStyle} fontSize="28" fill="currentColor">Trip</text>
                    <text x="136" y="52" className={textStyle} fontSize="28" fill="#0f766e">Carry</text>
                </svg>
            );

        default:
            return null;
    }
}
