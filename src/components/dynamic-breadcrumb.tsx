"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Função para capitalizar a primeira letra de cada segmento\
function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function DynamicBreadcrumb() {
  const pathname = usePathname(); // Exemplo: "/dashboard/device"
  const segments = pathname.split("/").filter(Boolean);

  // Cria um array com caminhos cumulativos
  const cumulativePaths = segments.map((segment, index) => {
    return "/" + segments.slice(0, index + 1).join("/");
  });

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center">
        {/* Item Home sempre presente */}
        <BreadcrumbItem className="flex items-center">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          {(segments.length > 0) && <BreadcrumbSeparator />}
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = cumulativePaths[index];

          return (
            <BreadcrumbItem key={href} className="flex items-center">
              {isLast ? (
                <BreadcrumbPage>{capitalize(segment)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={href}>{capitalize(segment)}</BreadcrumbLink>
              )}
              {!isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
