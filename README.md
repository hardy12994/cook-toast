##### Cook your Toast with Cook-Toast

#### Installation -

```
    npm install cook-toast --save
```

### Where its need ?

- To give the indication to the user what the next step is.
- To give warning to user like Please Not try this Again. 
- If I want to show the Success response on the UI.
- If I want to show the Failure response on UI.

### How to use ?

 Import the *`CookToastModule`* in your main NgModule of your application
 
 and insert this module in your imports array of NgModule.


 ```
   //main module
   
   import { CookToastModule } from 'cook-toast';
   @NgModule({
       imports :[
           CookToastModule
       ]
   })

 ``` 

Now Import the *`KitchenService`* in your Component to make use of it in HTML's

Don't forget to Inject it in your component Constructor.  

So yeah !!! you are the point to use your TOAST. Their are Four Type 

of TOAST you can use to make the user indications what to do NEXT.


```
 import { KitchenService } from 'cook-toast';
 
 class MyToastComponent {
 
     constructor(private kitchenService: KitchenService){

             this.kitchenService.cook('Hey I am your Toast', 's');
             this.kitchenService.cook('Hey I am your Toast', 'f');
             this.kitchenService.cook('Hey I am your Toast', 'w');
             this.kitchenService.cook('Hey I am your Toast', 'i');

     }

     
 }

```

Which for which ?

- s is for **SUCCESS** -> GREENISH
- f is for **FAILURE** -> RED
- w is for **WARNING** -> YELLOW-ORANGE
- i is for **INFORMATION** -> BLUE 


Now How it should be set in HTML ?

```
    <span *cook-toast="5; left:true; top:true;" id="toast"></span>

```

So here - 
- `cook-toast` is the your Directive Name.
- Ist Param `5` is Stay Time on Screen. It is in Seconds.
- IInd and IIIrd Param are for Position of your toast.So just set `true` for two positions.
- These are the possible postions 
  
  -`top:true;left:true` 

  -`top:true;right:true`

  -`bottom:true;left:true`
   
  -`bottom:true;right:true` 


NOTE - 
  If you Don't Set the Position of your TOAST it will comming to
  By default **LEFT-TOP**. 


##### Contributions are most Welcome.

##### Hope you Like it !






