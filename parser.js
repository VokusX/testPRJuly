const json = require("./toolchain.json");

function getSlackWebhook(){
  if(json && json.services){
    for(service of json.services){
      if(service.service_id == 'slack'){
        return service.parameters.api_token;
      }
    }
    return '';
  }
}

console.log(getSlackWebhook());
