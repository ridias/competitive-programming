interface Stock {
    name: string,
    price: number,
};

function biggerPrice(limit: number, data: Stock[]): Stock[] {
    data.sort((a, b) => b.price - a.price)
    return data.slice(0, limit);
}