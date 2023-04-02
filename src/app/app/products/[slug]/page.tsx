interface ProductProps {
    params: {slug: string;}
}

export default function Product({params}: ProductProps){
    return (
        <>
        Product {params.slug}
        </>
    )
}