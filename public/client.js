function getGuildPercent(){
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.vime.world/guild/get?id=11479', false);
xhr.send();  
  let data = JSON.parse(xhr.responseText);
  var notpercentage = data.levelPercentage * 100;
  let percentage = Math.round(notpercentage);
  return percentage;
}
function stringifyPercent(percent){
  return percent + "%";
}
function setPText(id,text){
  document.getElementById(id).innerHTML = text;
}
function getGuildLevel(){
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.vime.world/guild/get?id=11479', false);
xhr.send();  
  let data = JSON.parse(xhr.responseText);
  let level = data.level;
  return level;
}
function setProgressValue(percentage,id){
  document.getElementById(id).value = percentage;
}
function setPercent(id){
  document.getElementById(id).data="lol";
}

function getLeaderUsername(){
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.vime.world/guild/get?id=11479', false);
xhr.send();  
  var data = JSON.parse(xhr.responseText);
  for(var i = 0;i < data.members.length;i++){
//     var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.vime.world/guild/get?id=11479', false);
// xhr.send();  
//   var data = JSON.parse(xhr.responseText);
    if(data.members[i].status == "LEADER"){
      return data.members[i].user.username;
    }
  }
}

var percent = getGuildPercent();
setProgressValue(percent,"levelprogress");
setPercent("levelprogress");
setPText("level", getGuildLevel() + "LVL (" + stringifyPercent(getGuildPercent()) + ")");
setPText("leadernick", getLeaderUsername());
