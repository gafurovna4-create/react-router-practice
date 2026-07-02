const BASE_URL = "https://api.escuelajs.co/api/v1"

export async function getProducts() {
    const response = await fetch(`${BASE_URL}/products?limit=10&offset=0`)
    if (!response.ok) {
        throw new Error("Something went wrong!")
    }
    return response.json()
}

export async function getProductBySlug(slug) {
    const response = await fetch(`${BASE_URL}/products/slug/${slug}`)
    if (!response.ok) {
        throw new Error("Something went wrong!")
    }
    return response.json()
}

export async function getProductById(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    if (!response.ok) {
        throw new Error("Something went wrong!")
    }
    return response.json()
}