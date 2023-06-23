export const formatCurrency = (price) => {
    if (typeof price === 'string') {
        price = parseFloat(price)
    }
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}