import { ChangeDetectorRef, Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { contact } from '../Contact';
@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.css']
})
export class ContactviewComponent {

  EditPressed:Boolean=false;

  // 
  // var name:string;
  // var category:string;
  // var phnum:number;

   obj :any;

   changeHand:Boolean = false;

  contacts = new Array<any>();
  constructor(public contactServices:ContactsService,public cd: ChangeDetectorRef){

  }

  UpdateClick(name:any){
    console.log(name);
    this.obj = name;
    this.EditPressed = true;
    

  }

  modalclose(event:any){
    console.log(event);
    this.EditPressed=false;
    this.cd.detectChanges();
    this.changeHandler()
  }

  refreshPage(event:any){
    this.changeHand = true;
  }

  ngOnInit():void{
    this.contactServices.getContacts().subscribe(Response =>{
      this.contacts = Response;
      console.log(Response)
      console.log(this.contacts)
      this.changeHand = true;
    })
  }
  // ngOnChanges(c){

  // }

  changeHandler():void{
    this.contactServices.getContacts().subscribe(Response =>{
      this.contacts = Response;
      console.log(Response)
      console.log(this.contacts)
    })
  }
  deleteItem(cont:any){
    this.contactServices.deleteContact(cont.id).subscribe((response:any)=>{
     console.log(response);
     alert("Deleted Successfully");
     this.changeHandler()

    
 
 
    })
  }

  
}
