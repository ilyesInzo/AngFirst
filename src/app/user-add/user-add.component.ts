import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../../pojo/user.model';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router : Router,private userService : UserService ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName:  ['',Validators.required],
      email:  ['',[Validators.required, Validators.email]],
      bestDrink:  ['Coca Cola',Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmit(){
    const savedForm = this.userForm.value;
    const hobbies = savedForm['hobbies'];
    const user = new User(savedForm['firstName'],savedForm['lastName'],savedForm['email'],savedForm['bestDrink'],hobbies ? hobbies : []);
    this.userService.addUser(user);
    this.router.navigate(['/userList']);
    }

    onAddHobby(){
      const newHobbyControl = this.formBuilder.control(null, Validators.required);
      this.getHobbies().push(newHobbyControl);
    }

    getHobbies():FormArray{
      return this.userForm.get('hobbies') as FormArray ;
    }


}
