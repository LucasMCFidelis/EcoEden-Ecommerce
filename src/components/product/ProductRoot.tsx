import { ReactNode } from "react";

interface ProductRootProps {
    children: ReactNode
}

export function ProductRoot({ children }: ProductRootProps) {
    return (
        <div className=" w-fit flex flex-col items-start justify-center gap-3">
            {children}
        </div>
    )
}