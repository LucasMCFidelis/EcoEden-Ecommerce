interface ProductContentProps {
    title: string,
    price: number
}

export function ProductContent({ title, price }: ProductContentProps) {
    return (
        <h3>{title} <br />
            R$ <span className="text-lime-500 font-semibold">{price}</span>
        </h3>
    )
}