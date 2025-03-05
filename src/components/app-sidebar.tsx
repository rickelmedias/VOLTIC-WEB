"use client"

import * as React from "react"
import {
    Bot,
    SquareTerminal,
} from "lucide-react"
import { Separator } from "@radix-ui/react-separator";
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { VolticLogo } from "@/logos/Voltic"

const data = {
    user: {
        name: "Facens",
        email: "atendimento@facens.br",
        avatar: "/avatars/facens.jpg",
    },
    navMain: [
        {
            title: "Painel",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Gráfico Inteligente",
                    url: "grafico-inteligente",
                },
                {
                    title: "Gráfico de Consumo",
                    url: "#",
                },
            ],
        },
        {
            title: "Dispositvos",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Meus Dispositivos",
                    url: "dipositivos",
                },
                {
                    title: "Novo Dispositivo",
                    url: "#",
                },
            ],
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <NavUser user={data.user} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <div className="w-full flex justify-center">
                    <VolticLogo className="w-full" color="gray" />
                </div>
                <Separator orientation="vertical" className="mr-2 h-4" />
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
