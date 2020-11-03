import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public queryParams :any;
  servicesList:any = [
    { header: 'Service 1', content: 'In economics, a service is a transaction in which no physical goods are transferred from the seller to the buyer. The benefits of such a service are held to be demonstrated by the buyer willingness to make the exchange. Public services are those that society as a whole pays.' },
    { header: 'Service 2',  content: 'Work performed for remuneration. the services the armed forces. (sometimes singular) economics commodities, such as banking, that are mainly intangible and usually consumed concurrently with their productionCompare goods (def. 2) a system of providing the public with gas, water, etc.' },
    { header: 'Service 3', content: 'In economics, a service is a transaction in which no physical goods are transferred from the seller to the buyer. The benefits of such a service are held to be demonstrated by the buyer willingness to make the exchange.' },
    { header: 'Service 4', content: 'Nature of Services. The definition of service is “any intangible product, which is essentially a transaction and is transferred from the buyer to the seller in exchange.' },
    { header: 'Service 5', content: 'A service is something that the public needs, such as transport, communications facilities, hospitals, or energy supplies, which is provided in a planned.' },
    { header: 'Service 6', content: 'Service may refer to: Contents. 1 Activities; 2 Arts, entertainment, and media; 3 Economics and business; 4 People with the name; 5 Places; 6 Religion.' }
  ];
  step:any;
  constructor( private activeRoute: ActivatedRoute) { }
  ngOnInit() { 
    this.activeRoute.queryParams.subscribe((params) => {
      this.queryParams = parseInt(params.id)
      if(this.queryParams < this.servicesList.length){
        this.setStep(this.queryParams)
      }      
    }); 
  }  
  setStep(index:any) {    
    console.log(index);
    this.step = index;
  }


}
