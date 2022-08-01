let Locations : {
    city: string;
    ZIPcode: number;
    Address: string;
    Img: string;
    display(): string;
}= {
    city : "Vienna",
    ZIPcode : 1010,
    Address : "Herrngasse 1/10",
    Img : "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839__340.jpg",
    display : function(){
      return  `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    }


}


let arr : any =[];



class locations {
    city: string;
    ZIPcode: number;
    Address: string;
    Img: string;

    constructor(city:string,ZIPcode:number,Address:string,Img:string) {

        this.city = city;
        this.ZIPcode = ZIPcode;
        this.Address = Address;
        this.Img = Img;

        arr.push(this);
    }

    display() {
        return  `<div class="col-6">
        <div class="card" style="width: 18rem;">
        <img src="${this.Img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.Address}</h5>
          <p class="card-text">${this.ZIPcode}</p>
          <a href="#" class="btn btn-primary">${this.city}</a>
        </div>
      </div>
      </div>`
    }
}
let locations1 = new locations("Vienna",1010,"Herrngasse 1/10","https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839__340.jpg")
let locations2 = new locations("Vienna",1020,"Praterstrasse 1/1","https://cdn.pixabay.com/photo/2015/09/23/11/49/night-953541__340.jpg")


class Resturant extends locations {
    TelNumber : number;
    Cuisine : string;
    WebAddress : string;

    constructor (city:string,ZIPcode:number,Address:string,Img:string,TelNumber:number,Cuisine:string,WebAddress:string){
    super(city,ZIPcode,Address,Img);
    this.TelNumber = TelNumber
    this.Cuisine = Cuisine
    this.WebAddress = WebAddress
    }
    display(){
        return `<div class="col-6">
        <div class="card" style="width: 18rem;">
        <img src="${this.Img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.Cuisine}</h5>
          <p class="card-text">${this.city} ${this.ZIPcode} , ${this.Address} Telnumber:${this.TelNumber}</p>
          <a href="#" class="btn btn-primary">${this.WebAddress}</a>
        </div>
      </div>
      </div>`
    }
}

let Resturant1 = new Resturant("Vienna",1010,"Hernngasse 1/10","https://cdn.pixabay.com/photo/2015/02/24/11/54/vienna-647328__340.jpg",0600100,"italic food","www.vienna.at")
let Resturant2 = new Resturant("Vienna",1020,"praterstern 1/1","https://cdn.pixabay.com/photo/2014/08/26/13/09/prater-427925__340.jpg",0600100,"indian food","www.vienna.at")

class Event0 extends locations {
    EventDate : number;
    EventTime : number;
    TicketPrice : number;
    

    constructor (city:string,ZIPcode:number,Address:string,Img:string,EventDate : number,EventTime : number, TicketPrice : number){
        super(city,ZIPcode,Address,Img);
        this.EventDate = EventDate
        this.EventTime =  EventTime
        this.TicketPrice = TicketPrice
    }
    display() {
        return `<div class="col-6">
        <div class="card" style="width: 18rem;">
        <div class="card" style="width: 18rem;">
        <img src="${this.Img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.EventDate}</h5>
          <p class="card-text">${this.city} ${this.ZIPcode} , ${this.Address}, at${this.EventTime}</p>
          <a href="#" class="btn btn-primary">${this.TicketPrice}</a>
        </div>
      </div>
      </div>`
        
    }
}
let event1 = new Event0("Vienna",1010,"Hernngasse 1/10","https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500__340.jpg",  08.08.2022  ,18:00,   25€)
let event2 = new Event0("Vienna",1020,"praterstrasse 2/2","https://cdn.pixabay.com/photo/2019/08/05/22/38/st-charless-church-4387053__340.jpg",08.08.2022,18:00,25€ )


for (let val of arr) {
    (document.getElementById("result") as HTMLElement).innerHTML += val.display()
}