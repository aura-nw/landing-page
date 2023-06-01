var express = require('express');
var axios = require('axios');
var app = express();

app.listen(3000, ()=>{
        console.log('listening on port 3000');
    }
)
app.get('/circulating-supply', async function(req, res) {
    var apiTotalSupply = 'https://lcd.aura.network/cosmos/bank/v1beta1/supply/uaura';
    var apiVestingSale = 'https://lcd.aura.network/cosmos/bank/v1beta1/balances/aura125gwrqglh495q729zzvraz4twx0fvjfm3c9m7t/by_denom?denom=uaura';
    var apiVestingTeam = 'https://lcd.aura.network/cosmos/bank/v1beta1/balances/aura1pqlh09f0zhszyaaq57ndf8djap4suth2hvl430/by_denom?denom=uaura';

    var [resultTotalSupply, resultVestingSale, resultVestingTeam] = await Promise.all([
        axios.get(apiTotalSupply), axios.get(apiVestingSale), axios.get(apiVestingTeam)
    ])
    res.send(String((resultTotalSupply.data.amount.amount - resultVestingSale.data.balance.amount - resultVestingTeam.data.balance.amount) * 1.0 / 1000000));
})