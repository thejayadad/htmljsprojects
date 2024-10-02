//destructuring assignment  - [show word]

//   it’s a way to unpack values from arrays or properties from objects and assign them to variables in a clean, concise manner - [show example]

//It essentially lets you extract multiple pieces of data from a single array or object - [show example]

//<-examples->imagine you have an array and you want to assign some of its values to a local variable. - show array

//one approach is to assign each variable by referencing the index in the array  - show it and a disappointed look

// this works just fine but  As you can see, this is quite repetitive, especially if we have many elements to access- show the code


//with destructuring we can do the same thing but with significantly less code  - editor


/**
 *by using the brackets after const we can assign a variable name to each index in the array 
just make sure the position of the variable matches the values index in the array
when working with arrays u may want to omit a variable
you can do so by adding a comma excluding a variable name to skip that index
you can rename the extracted variables to something else. 
This is especially useful if you already have variables with the same name or if you want more meaningful names.  

in oyher cases you may want to name the first couple variables then put the remainder in their own array
use the rest operator - 
just add 3 dots in front of the variable name
destructuring isnt just available for arrays but also objects
we have a user object that represents the name, age, email of a user
one approach to extract the properties is:
this requires duplicating the object property name as a variable with dot notation
a better approach
put braces after const 
u cna reference property names which become local variables
this approach is much cleaner and easier to read
if you needed to update a value 
include the equal sign to set a default value
if a rename is required add a colon after the property name
which is helpful when dealing with name collisions 
or working with objects that use propery names that are not valid variable name
in addition to renaming you can use a colon to access nested properties 
this is similar to working with data received from a api
or json return data
it gives you the ability to display relevant data to a user 


 */