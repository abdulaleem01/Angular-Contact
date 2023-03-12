import { Component } from '@angular/core';
import { contact } from '../Contact';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.css']
})
export class ContactaddComponent {
  name:string='';
  category:string='';
  phnum:number = 0;
constructor(public contactservice:ContactsService){}
  saveContacts(){
   const contacts = new contact(this.name,this.category,this.phnum);
   this.contactservice.postContacts(contacts).subscribe((response:any)=>{
    console.log(response);
    alert("Added Successfully");
    this.name='';
    this.category='';
    this.phnum=0;
   })
  }

}


