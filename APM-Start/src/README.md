# Angular Basics

<b>What are building blocks in Angular?</b>
<p>The building blocks are `Components , Services`</p>

<b>What are [components] in Angular?</b>
<p>The components in Angular are made of template ( HTML ) + Class ( Logic ) + Metadata ( Additional information about component )

<b>What is a Template in Angular?</b>
- It is a view layer
- It is created with HTML
- It includes bindings and directives

<b>What is [class] in Angular</b>
- The class consists of properties and method.
- The code in the class support the view ( template ).
- It is created with typescript.

<b>What is [metadata] in Angular component</b>
- Additional information about component for Angular.
- It is defined with decorator.

<b>What is a decorator in Angular</b>
<p>It's a function that adds metadata to a class, its members, or its method arguments.</p>

<b>What is [module] in Angular</b>
- Modules in Angular organize the application by defining the oraganizing components and services.
- Modules define organization boundaries.
- They provide template resolution environment.

<b>What is [property] binding</b>
- Property binding is about binding the property of an element with property in the class.
- it's like interpolation 
- <img [src]='product.imageUrl'> -- this is called property binding
- <img src={{product.imageUrl}}> -- this is called interpolation

<b>What is [event] binding?</b>
- Event binding is the way to bind event through user actions to class.
- The event binding will execute a function in the class when a certain event is triggered.
- <button (click) = 'toggleImage()'>

<b>What is two way binding?</b>
- It's binding from class to template and vice versa.
- <input [(ngModel)]='listFilter'>

<b> What are pipes in Angular? </b>
- Pipe tranforms bound properties before they are displayed.
- Pipes are needed when data is not in the correct format to display.
- {{ product.productCode | lowercase }}

<b> Type of data bindings </b>
- Interpolation : {{pageTitle}} - From class to template
- Property Binding : <img [src]='product.imageUrl'>  - From class to template
- Event Binding : <button (click)='toggleImage()'> - From template to class
- Two-Way Binding : <input [(ngModel)] = 'listFilter'/> - It's connected at both ends.

<b> Style Encapsulation </b>
- This encapsulates the style with a component.
- This can done using style or styleUrls properties.
- Change in a style in this setup only impact that component thus providing full encapsulation.

<b> Component Lifecycle Hooks </b>
- Angular components has a life cycle.
- Create -> Render -> Create and Render Children -> Process Changes -> Destroy.
- Angular provides life cycle hooks to tap into these steps and perform operations as needed.
- 3 most basic life cycle hooks - OnInit , OnChanges , OnDestroy.

