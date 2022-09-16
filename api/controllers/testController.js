const {testdb}=require('../service/test/testService')


const testController=async(req,res)=>{
     const testservice=await testdb(req)
     res.status(202).send(testservice)
}

module.exports={testController}