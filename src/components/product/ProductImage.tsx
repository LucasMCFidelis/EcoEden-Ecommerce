interface ProductImageProps{
    path: string,
    alt: string
}

export function ProductImage({path, alt}: ProductImageProps){
    return (
        <img 
            src={path} 
            alt={alt} 
            className="w-72 " 
        />
    )
}