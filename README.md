### Cook your Toast with Cook-Toast

#### Note - **For Angular 5 please reffer to this [**Cook-Toast-NG5**](https://www.npmjs.com/package/cook-toast-ng5)**

![WARN](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679477/warn_nnsjyl.png)    ![FAIL](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679476/fail_rksmcp.png)

![INFO](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679477/Info_vryarw.png)    ![SUCCESS](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679477/success_upvnia.png)

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


```sh
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

- s is for **SUCCESS**. ![SUCCESS](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679477/success_upvnia.png)

- f is for **FAILURE**. ![FAIL](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679476/fail_rksmcp.png)

- w is for **WARNING**. ![WARN](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679477/warn_nnsjyl.png)

- i is for **INFORMATION**. ![INFO](http://res.cloudinary.com/dkws91cqo/image/upload/v1510679477/Info_vryarw.png)


Now How it should be set in HTML ?

```sh
    <span id="toast" *cook-toast="5; left:true; top:true;"></span>
```

So here - 
- `cook-toast` is the your Directive Name.
- Ist Param `5` is Stay Time on Screen. It is in Seconds.
- IInd and IIIrd Param are for Position of your toast. So, just set `true` for two positions.
- These are the possible postions ->
  
  - `top:true;left:true` 

  - `top:true;right:true`

  - `bottom:true;left:true`
   
  - `bottom:true;right:true` 


### RUN-TIME Positions -

If you want to provide **RUN-TIME Positions** for your Cook-Toast

then just insert the object of postions like this -

```sh
    
    this.kitchenService.cook('Hey I am your Toast', 'i', {
        right: true,
        bottom: true
    });

```


**NOTE** - 
  If you Don't Set the Position of your TOAST it will comming to
  By default **LEFT-TOP**.



### Want to make Slide Animation in Toast? -

If you want to slide your Toast to the to the Vertical Sides,

just make the fourth Parameter `true` while you cook your toast 

in RUNTIME and you can also use in your HTML Parameters.

- For Runtime **Slide Animation** -

```sh
    
    this.kitchenService.cook('Hey I am your Toast', 'i', {
        right: true,
        bottom: true
    }, true);

```

- For HTML **Slide Animation**

```sh
    <span id="toast" *cook-toast="5; left:true; top:true; slide:true;"></span>
```





##### Contributions are Most Welcome.

##### Hope you Like it !