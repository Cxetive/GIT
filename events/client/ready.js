module.exports = async bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/twistedvortek"});

   let statuses = [
`Helping members!`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "WATCHING"});

   }, 30000)

}
