
//configuramos el enrutador que provee express 
const {Router}= require ('express');
const router = Router() // router es una funcion que devuelve un objeto


/*router.get('/', (req,res)=>{
    res.send("hello word")
})*/ // ejemplo para manejar el enrutador, toma la ruta inicial(/)y cuanmdo se requiere esa ruta manda un mensaje al viewport del navegador 


router.get('/',(req,res)=>{
    res.render('index.ejs')
})

router.get('/escaner',(req,res)=>{
    res.render('escaner')
})

module.exports=router    