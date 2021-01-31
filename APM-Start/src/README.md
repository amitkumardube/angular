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

<b>What is property binding</b>
- Property binding is about binding the property of an element with property in the class.
- it's like interpolation 
- example : <img [src]='product.imageUrl'> -- this is called property binding
            <img src={{product.imageUrl}}> -- this is called interpolation
