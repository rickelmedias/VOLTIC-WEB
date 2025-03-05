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
                    title: "Graficos",
                    url: "/graficos",
                },
                {
                    title: "Gráfico Inteligente",
                    url: "/graficos/inteligente",
                },
                {
                    title: "Gráfico de Consumo",
                    url: "/graficos/consumo",
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
                    title: "Dispositivos",
                    url: "/dipositivos",
                },
                {
                    title: "Novo Dispositivo",
                    url: "/dipositivos/novo",
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
