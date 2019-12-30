const Mock = require('mockjs');
const listData = [];
for(let i=1;i<=40;i++){
  listData.push({
    id:Mock.Random.id(),
    img:Mock.Random.image('100x100',Mock.Random.color()),
    title:Mock.Random.ctitle(4)
  })
}
module.exports = listData
