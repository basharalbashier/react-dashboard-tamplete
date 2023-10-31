class Serifng {
  rubyOnRailsServer = "http://localhost:3333/";
djangoServer="http://localhost:8000/";
  full;
  routing;
  constructor(route) {
    this.routing = route;
   if(route==='employees'){
    this.full = this.rubyOnRailsServer + route;
   }
   if(route==='contacts/'){
 this.full = this.djangoServer + route;
   }
  }
  // get route() {
  //   return this.full;
  // }
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  makeGetRequest = async () => {
    var request;
    await fetch(
      this.full,

      {
        method: "GET",

        headers: this.headers,
      }
    )
      //request = res
      .then((res) => 
        res.json().then((data) => {
          console.log(res);
          
          request = data;
        })
      )
      .catch((rej) => console.log(rej));
    return request;
  };
  makePostRequest = async (body) => {
    var request = await fetch(this.full, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(this.routing==='employees'?(this.routing, body):body),
    });
    return JSON.stringify(request);
  };
}

export default Serifng;
