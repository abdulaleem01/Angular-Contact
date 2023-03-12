import { Component,Output,EventEmitter, Input } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { contact } from '../Contact';

@Component({
  selector: 'app-contactupdate',
  templateUrl: './contactupdate.component.html',
  styleUrls: ['./contactupdate.component.css']
})
export class ContactupdateComponent {

id :any;
name:any;
category:any;
phnum:any;

nn="kkkk";

@Input() myobj:any;
@Output() isPress = new EventEmitter<boolean>();
@Output() isPress1 = new EventEmitter<boolean>();


ngOnInit(){
  this.name = this.myobj.name;
  this.category=this.myobj.category;
  this.phnum = this.myobj.phoneNo;
  this.id = this.myobj.id;

  console.log(this.name)

}

buttonPress(){
  this.isPress.emit(false);
  console.log(this.myobj)
  this.name = this.myobj.name;
  console.log(this.name)
}

constructor(public contactservice:ContactsService){}
  updateContacts(){
   const contacts = new contact(this.name,this.category,this.phnum);
   this.contactservice.putContacts(contacts,this.id).subscribe((response:any)=>{
    console.log(response);
    alert("Updated Successfully");
    this.isPress.emit(false);
    this.isPress1.emit(true);


   })
  }

}
