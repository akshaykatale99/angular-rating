# angular-rating

Angular Rating is for **angular4+**. It can be used for getting rate value by clicking on the stars.

**Steps to Install :-**
###### Note:- You have to install jquery in your project. [Check This](https://medium.com/@swarnakishore/how-to-include-and-use-jquery-in-angular-cli-project-592e0fe63176)
1) Download the files and place it in any folder in your project.
2) Import the rating.directive.ts file in your app.
3) Then you can use it anywhere in your application just using **<rating></rating>** tag.
  
    eg. 
    ```
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-test',
      template: `<mt-rating (onStarClicked)='getRating($event)'></mt-rating>`,
      styleUrls: ['../mtfrontend.component.css']
    })
    export class CartComponent implements OnInit {


      constructor() {
      }

      ngOnInit() {
      }
      
      public getRating(data){
        console.log(data); //Note:- on the click of the star it will return the value of that star.
      }

    }
    ```
    
    You can also make multiple instance of rating stars by assigning unique id to the attribute.
    
    eg.
    ```
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-test',
      template: `<mt-rating mtId = 'rat1' (onStarClicked)='getRating($event)'></mt-rating>
      <mt-rating mtId = 'rat2' (onStarClicked)='getRating($event)'></mt-rating>
      `,
      styleUrls: ['../mtfrontend.component.css']
    })
    export class CartComponent implements OnInit {


      constructor() {
      }

      ngOnInit() {
      }
      
      public getRating(data){
        console.log(data); //Note:- on the click of the star it will return the value of that star.
      }

    }
    ```
    
