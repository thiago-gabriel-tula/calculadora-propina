export function formatCurrency(quantity : number){
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(quantity); //formatea el numero a moneda
}
