function maxProf(prices){
    let sellIdx = prices;
    let profit = 0;
    for(let buyIdx = prices; buyIdx >= 0; buyIdx--){
        let buyVal = prices[buyIdx];
        let sellVal = prices[sellIdx];

        if(buyVal - sellVal >= 0){
            sellIdx = buyIdx;    
        }
        else{
            let price = sellVal - buyVal;
            profit = Math.max(profit, price)
        }
    }
    return profit;
}
const prices = [7, 6, 4, 3, 1]
console.log(maxProf());