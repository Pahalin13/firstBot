console.log('a')
const { Telegraf } = require ('telegraf')
require('dotenv').config()
const{ apiurl }= require('../data/urls.json')

const bot = new Telegraf(process.env.token)

bot.start((msg) => msg.reply('Hello i can can give you  real exchange rates'))

bot.help((msg) => msg.reply('/ex sum from two different currencies'))

bot.command('ex', async (msg) => {
    const { text } = msg.message
const [_,sum,from,to] = text.split(' ')
const response = await fetch(`${apiurl}v6/${process.env.apikey}/latest/${from}`)
const { conversion_rates } = await response.json

console.log(await response.json())

})


bot.launch(() => console.log('start'))