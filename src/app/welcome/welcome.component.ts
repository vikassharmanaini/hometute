import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  items = [
    {
      'label':'somthing',
      'value':'2000'
    },
    {
      'label':'somthing2',
      'value':'20006'
    },
    {
      'label':'somthing2',
      'value':'20006'
    },
  ];
  ic= [
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    {'label':'date','src':'https://img.freepik.com/free-vector/scientist-cartoon-character-with-science-lab-objects_1308-98927.jpg'},
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    {'label':'date','src':'https://img.freepik.com/free-vector/scientist-cartoon-character-with-science-lab-objects_1308-98927.jpg'},
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    {'label':'data','src':'https://img.freepik.com/premium-vector/cartoon-math-teacher_74102-1462.jpg'},
    
  ];
  feedback=[
    {'username':'mailusername','feedback':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit natus nesciunt corporis quaerat molestiae, quae illum iure recusandae!'},
    {'username':'mailusername','feedback':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit natus nesciunt corporis quaerat molestiae, quae illum iure recusandae!'},
    {'username':'mailusername','feedback':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit natus nesciunt corporis quaerat molestiae, quae illum iure recusandae!'},
    {'username':'mailusername','feedback':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit natus nesciunt corporis quaerat molestiae, quae illum iure recusandae!'},
    {'username':'mailusername','feedback':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit natus nesciunt corporis quaerat molestiae, quae illum iure recusandae!'},
    {'username':'mailusername','feedback':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit natus nesciunt corporis quaerat molestiae, quae illum iure recusandae!'},
  ];
}
