import myJson from '../db.json'


exports.handler = async function(event,context){
  return{
    statusCode:200,
    body: JSON.stringify(myJson)
  }
}