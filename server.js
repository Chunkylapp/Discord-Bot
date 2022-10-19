const DiscordBot = require('discord.js');

const fs = require('fs');
const ytdl = require('ytdl-core');

const bot = new DiscordBot.Client();

const fane=365553342304354306;

const prefix = '-';


bot.once('ready', () => {
    console.log('Bot is online');
    bot.user.setStatus('dnd');
    bot.user.setPresence({ game: { name: 'astept comenzi coaie', type: 0 } });
});


bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'greetings');
    if (!channel) return;
    channel.send(`Sal coaie. BA FRATILOR A INTRAT ${member} PE SERVER.`);
  });


bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();
    
    if(command === 'coaiee'){
            var VC = message.member.voice.channel;
            if(VC!=null){
            VC.join().then(connection => {
                const dispatcher = connection.play(ytdl('https://youtu.be/Yxg1fWVViqk'));
                dispatcher.on("end", end => {VC.leave();});
            })
            .catch(console.error);
        }
        else{
            message.channel.send('esti prost coaie nu esti in voice chat');
        }
    }else{
        if(command === 'baia_mare')
        message.channel.send('BAIA MAREEEE');
        else{
            if(command==="ba_ian"){
                message.channel.send('Da coaie');
            }
            else{
                if(command==="florareasa"){
                    var voiceChannel = message.member.voice.channel;
                if(voiceChannel!=null){
                    voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(ytdl('https://youtu.be/uKBpEClRiHo'));
                    dispatcher.on("end", end => {voiceChannel.leave()});
            })
            .catch(console.error);
        }
        else{
            message.channel.send('esti prost coaie nu esti in voice chat');
        }
                }
                else{
                    if(command==='ajutor_coaie'){
                        message.channel.send('**-coaiee** il face pe ian sa zica baia mare\n**-baia_mare** il face pe fane sa zica baia mare in chat\n**-ba_ian** il face pe fane sa iti raspunda\n**-florareasa** mama mea e florareasa \n**-summon_fane** il cheama pe fane sau pe alex pe D&C\n**-ajutor_coaie** iti da comenzile ca esti prost si nu le stii');
                    }
                    else{
                        if(command==='acas'){
                            var voiceChannel = message.member.voice.channel;
                            voiceChannel.leave();
                        }
                        else{
                            if(command==="summon_fane"){
                                var msg=new DiscordBot.MessageEmbed()
                                .setColor('#FF8b60')
                                .setTitle('Ticket request')
                                .setAuthor("@"+message.author.tag)
                                .setTimestamp()
                                .setFooter('D&C®');
                                message.author.send('Your assistance ticket has been created. Please wait for a DM from an admin.');
                                const alex = bot.users.cache.get('365553342304354306');
                                if (alex) alex.send(msg);
                                const fane = bot.users.cache.get('295556886307143683');
                                if (fane) fane.send(msg);
                            }
                            else{
                                if(command==="cox"){
                                    var voiceChannel = message.member.voice.channel;
                                    if(voiceChannel!=null){
                                         voiceChannel.join().then(connection => {
                                            const dispatcher = connection.play(ytdl('https://youtu.be/rRY7UcLcscY'));
                                        dispatcher.on("end", end => {voiceChannel.leave()});});
                                    }
                                    else{
                                        message.channel.send('esti prost coaie nu esti in voice chat');
                                    }
                                }
                                else{
                                    if(command==="varutu"){
                                        var voiceChannel = message.member.voice.channel;
                                    if(voiceChannel!=null){
                                        voiceChannel.join().then(connection => {
                                            const dispatcher = connection.play(ytdl('https://youtu.be/UUauznFilIA'));
                                        dispatcher.on("end", end => {voiceChannel.leave()});});
                                    }
                                    else{
                                        message.channel.send('esti prost coaie nu esti in voice chat');
                                    }
                                    }
                                    else{
                                        if(command==="varutuu"){
                                            var voiceChannel = message.member.voice.channel;
                                            if(voiceChannel!=null){
                                                voiceChannel.join().then(connection => {
                                                    const dispatcher = connection.play(ytdl('https://youtu.be/I8OQsB2P4xs'));
                                                dispatcher.on("end", end => {voiceChannel.leave()});});
                                            }
                                            else{
                                                message.channel.send('esti prost coaie nu esti in voice chat');
                                            }
                                        }
                                        else{
                                            if(command==="japoniaa"){
                                                var voiceChannel = message.member.voice.channel;
                                                if(voiceChannel!=null){
                                                    voiceChannel.join().then(connection => {
                                                        const dispatcher = connection.play(ytdl('https://youtu.be/HheQoXINaOM'));
                                                    dispatcher.on("end", end => {voiceChannel.leave()});});
                                                }
                                                else{
                                                    message.channel.send('esti prost coaie nu esti in voice chat');
                                                }
                                            }
                                            else{
                                                if(command==="mue_gorge"){
                                                    var voiceChannel = message.member.voice.channel;
                                                    if(voiceChannel!=null){
                                                        voiceChannel.join().then(connection => {
                                                            const dispatcher = connection.play(ytdl('https://youtu.be/TZ0EHDAi2y4'));
                                                        dispatcher.on("end", end => {voiceChannel.leave()});});
                                                    }
                                                    else{
                                                        message.channel.send('esti prost coaie nu esti in voice chat');
                                                    }
                                                }
                                                else{
                                                    if(command==="stiti_cum_e"){
                                                        var voiceChannel = message.member.voice.channel;
                                                        if(voiceChannel!=null){
                                                            voiceChannel.join().then(connection => {
                                                                const dispatcher = connection.play(ytdl('https://youtu.be/NuM4kcleQKc'));
                                                            dispatcher.on("end", end => {voiceChannel.leave()});});
                                                        }
                                                        else{
                                                            message.channel.send('esti prost coaie nu esti in voice chat');
                                                        }
                                                    }
                                                    else{
                                                        if(command==="gh"){
                                                            var voiceChannel = message.member.voice.channel;
                                                            if(voiceChannel!=null){
                                                                voiceChannel.join().then(connection => {
                                                                    const dispatcher = connection.play(ytdl('https://youtu.be/rfPJNHFzLsw'));
                                                                dispatcher.on("end", end => {voiceChannel.leave()});});
                                                            }
                                                            else{
                                                                message.channel.send('esti prost coaie nu esti in voice chat');
                                                            }
                                                        }
                                                        else{
                                                            if(command==="milsugi"){
                                                                var voiceChannel = message.member.voice.channel;
                                                                if(voiceChannel!=null){
                                                                    voiceChannel.join().then(connection => {
                                                                        const dispatcher = connection.play(ytdl('https://youtu.be/4FIbvYehoe0'));
                                                                    dispatcher.on("end", end => {voiceChannel.leave()});});
                                                                }
                                                                else{
                                                                    message.channel.send('esti prost coaie nu esti in voice chat');
                                                                }
                                                            }
                                                            else{
                                                                if(command==="esti_nesimtit"){
                                                                    var voiceChannel = message.member.voice.channel;
                                                                    if(voiceChannel!=null){
                                                                        voiceChannel.join().then(connection => {
                                                                            const dispatcher = connection.play(ytdl('https://youtu.be/2V3eU92o0X4'));
                                                                        dispatcher.on("end", end => {voiceChannel.leave()});});
                                                                    }
                                                                    else{
                                                                        message.channel.send('esti prost coaie nu esti in voice chat');
                                                                    }
                                                                }
                                                                else{
                                                                    if(command==="marijuana"){
                                                                        var voiceChannel = message.member.voice.channel;
                                                                        if(voiceChannel!=null){
                                                                            voiceChannel.join().then(connection => {
                                                                                const dispatcher = connection.play(ytdl('https://youtu.be/fqEhB9rjbvE'));
                                                                            dispatcher.on("end", end => {voiceChannel.leave()});});
                                                                        }
                                                                        else{
                                                                            message.channel.send('esti prost coaie nu esti in voice chat');
                                                                        }
                                                                    }
                                                                    else{
                                                                        if(command==="yamete"){
                                                                            var voiceChannel = message.member.voice.channel;
                                                                            if(voiceChannel!=null){
                                                                                voiceChannel.join().then(connection => {
                                                                                    const dispatcher = connection.play(ytdl('https://youtu.be/xu_xC4YtwV0'));
                                                                                dispatcher.on("end", end => {voiceChannel.leave()});});
                                                                            }
                                                                            else{
                                                                                message.channel.send('esti prost coaie nu esti in voice chat');
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
bot.login('NzQyNzQ4NTk2NTIwMzUzODA1.XzKoiQ.X5VcrsMbPV5IsvrJU-EfcA4Oo2I');