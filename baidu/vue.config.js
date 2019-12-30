const listData = require('./public/mock.js');

module.exports = {
  lintOnSave:false,
  devServer:{
    before:function(app){
      //配置所有数据接口
      app.get('/list',(req,res)=>{
        res.json(listData)
      })
      //详情接口
      app.get('/detail',(req,res)=>{
        let { id } = req.query
        res.json(listData.filter(val=>val.id===id))
      })
    }
  }
}

