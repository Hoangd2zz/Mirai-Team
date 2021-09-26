module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100049949446834","100049949446834"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì hong ?","Sao ?? Làm ơn nhắn qua mess hoặc zalo để liên hệ bà chủ!!","Sao gọi chủ tôi có việc gì?","Hiện chị Xuân đang bận hãy sử dụng callad để liên hệ","Tag nữa ăn đấm ngay","Tag làm gì ? Chị Xuân khum có đây đâu :p","Sao? Tag có việc gì? Gấp thì ib riêng ngay!","Đúng rồi, chị Xuân xinh gái lắm","Thích tag ko :)","Tag chị Xuân làm chi dậy?","Dạo này chị Xuân hơi bận, thông cảm ~!","Cần cái giề, có Bot đây được hong :>","Hiện tại bà chủ của tôi đang bận, có gì hot ?","Tag cái gì Admin bận rồi","Tag admin làm gì, nó không có đây đâu!","Tag nữa t dỗi cho","Có cái db Admin rep","Nó ngủ rồi đừng tag nữa!","Hãy dùng callad để liên hệ với admin >,<"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }