import express, { NextFunction, Request, Response } from "express"
const app = express()

const userRouter = express.Router()
app.use("/api/v1/",userRouter)

userRouter.get("/user-router", (req, res, next)=> {
  console.log("Hello Halima Sadia form World")
  try{
    res.send(hllo)
  }catch(err){
    next(err)
  }
})


const logger = (req:Request, res:Response, next:NextFunction)=>{
  console.log({url:req.url, method:req.method})
  next()
}
app.get('/', logger, async(req:Request, res:Response, next:NextFunction) => {

  try{
    res.send(sdfjdfk)
  }catch(err){
    next(err)
  }
 
})

app.use((error:any,req:Request, res:Response,next:NextFunction)=> {
  console.log(error)
  res.send({
    success: false,
    message:"Something Went Wrong!"
  })
})



export default app;