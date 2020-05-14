const
    express = require("express"),
    router = express.Router()
;
//#endregion
router.get('/', (req, res)=>{
res.render('chat', {});
})

//#endregion
module.exports=router;