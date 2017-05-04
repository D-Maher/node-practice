var a = 1, b = 2, c = 3;  
       
(function firstFunction(){  
  var b = 5, c = 6;  

  (function secondFunction(){  
    var b = 8;  
    console.log('a: ' + a + ', b: ' + b + ', c: ' + c); // inserted here so that 'a', 'b', and 'c' have the values 1, 8, and 6, respectively, when printed to the console

    (function thirdFunction(){  
      var a = 7, c = 9;  

      (function fourthFunction(){  
        var a = 1, c = 8;  

      })();  
    })();  
  })();  
})();


// NOTES:

  // on scope...
  
  // Scope is the set of variables, objects, and functions you have access to.
   
  // JavaScript has two scopes: global and local. A variable that is declared outside a function definition is a global variable, and its value is accessible and modifiable throughout your program. A variable that is  declared inside a function definition is local. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function.
   
  // Functions defined inside other functions, known as nested functions, have access to their parent function's scope.
   
  // Pay attention to the comments in the code below:
   
  //   var a = 4; // 'a' is a global variable, it can be accessed by the functions below
       
  //   function foo() {
  //     var b = a * 3; // 'b' cannot be accessed outside foo function, but can be accessed by functions defined inside foo
  //     function bar(c) {  
  //       var b = 2; // another 'b' variable is created inside bar function scope the changes to this new `b` variable don't affect the old 'b' variable
  //       console.log(a, b, c);
  //     }

  //     bar(b * 4);
  //   }  
       
  //   foo(); // 4, 2, 48


  // on Immediately Invoked Function Expressions...

  // IIFE, Immediately Invoked Function Expression, is a common pattern for creating local scopes:    
  
    // (function(){ // the function expression is surrounded by parenthesis  
    //    // variables defined here can't be accessed outside  
    // })(); // the function is immediately invoked
