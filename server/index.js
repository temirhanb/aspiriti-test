const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.get('/',(req,res)=>{
  res.send('hello world suka')
})
app.listen(PORT, () => {
  console.log('Server start on port: ' + PORT)

})
