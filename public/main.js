(() => {
    const guild_id = "11479"
    fetch(`https://api.vime.world/guild/get?id=${guild_id}`)
        .then(r => r.json())
        .then(data => {
            const lvlPercentage = Math.round(data.levelPercentage * 100),
            guildLevel = data.level
            for (var i = 0; i < data.members.length; i++) {
            if (data.members[i].status == "MEMBER") {
                $("#members2").append(`<img id="member tooltip" class="memberphoto" data-tippy="${data.members[i].user.username} [${data.members[i].user.level}]" src="http://skin.vimeworld.ru/helm/${data.members[i].user.username}.png">`)
            }
            if (data.members[i].status == "LEADER") {
                $("#members11").append(`<img id="member" class="memberphoto" data-tippy="${data.members[i].user.username} [${data.members[i].user.level}]" src="http://skin.vimeworld.ru/helm/${data.members[i].user.username}.png">`)
            }
            if (data.members[i].status == "OFFICER") {
                $("#members1").append(`<img class="memberphoto" data-tippy="${data.members[i].user.username} [${data.members[i].user.level}]" src="http://skin.vimeworld.ru/helm/${data.members[i].user.username}.png">`)
            }
        }
        document.getElementById('level').innerHTML = `${guildLevel} LVL (${lvlPercentage} %)`
        document.getElementById('levelprogress').value = lvlPercentage
    }).catch(_ => {}) 
})()