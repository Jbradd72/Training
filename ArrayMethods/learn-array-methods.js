/*
## Method: push

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    Push takes up to 255 arguments as a list of elements to append to the array. Push will append each argument to the end of the array in the order they
    are listed.
##Does it edit the current array?
    Yes, by appending elements onto the end of the array.
##What does it return?
    The size of the array after all elements have been appended.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Well, let's say that I want an up-to-date list of courses offered by a given department. I decide to
    implement this by using an array of Course objects named courses. Then let's say that a new course has
    been developed and I want to update my array. I would create the object with the given info and then 
    pass it as a parameter to courses.push to update courses. 

##Build your real world example.
*/
var courses = [];
class Course {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
}

var newCourse = new Course("MyNewClass", 101);

//MyNewClass is now in the array
courses.push(newCourse);

/*
## Method: pop

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    Pop takes no parameters and removes the last element in the array, if there are any elements in the array. If not, it just returns undefined
##Does it edit the current array?
    Yes, if the array is not empty, by removing the last element. If the array is empty it is not modified.
##What does it return?
    The element that it popped off, if there was an element and undefined if the array was empty.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Returning to our last example, let's say the department changed it's mind and the course we just added is no longer going to be offered.
    We can remove it by simply calling courses.pop()

##Build your real world example.
*/

//MyNewClass is removed from the array

courses.pop();

/*
## Method: Shift

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    Shift is similar to pop in that it takes no parameters and removes an element from an end of the array. It is different in that it removes the first (element 0)
     element and not the last. Also, it will then shift each element down an index so that the element at index 1 will be shifted to element 0 after it is called. 
##Does it edit the current array?
    Again, like pop it does not edit the array if it is empty and it does edit the array by removing the first element if it is not empty.
##What does it return?
    The element that it popped off, if there was an element and undefined if the array was empty.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say we were implementing some sort of line for a service-oriented business, for example a queue for orders at a DMV, set up on a first-come first-serve
    basis. We might push on to our array integers corresponding to tickets that customers take. As the first person in line is called, we want the second person to
    take their place in our array.

##Build your real world example.
*/

//Five people waiting to be called
var orders = [77, 78, 79, 80];

//The next order to display is at the front of the array
//so we shift it off and the second person in line is now first
var next = orders.shift();


/*
## Method: unshift

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    Unshift takes up to 255 arguments as a list of elements to prepend to the array. Unshift will prepend each argument to the beginning of the array in the reverse order they
    are listed. In simpler terms, it takes the arguments as listed and puts them at the front of the array
##Does it edit the current array?
    Yes, by adding elements to the beginning of the array.
##What does it return?
    The size of the array after all elements have been added.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Returning to our DMV scenario, an example of when we would want to use unshift would be if there is an emergency order that absolutely must jump the line and come first
    and gets priority over the other non-emergency orders accordingly.

##Build your real world example.
*/

//81 is our emergency order that gets to skip the line
orders.unshift(81);

/*
## Method: sort

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The sort method takes as an optional parameter a comparison function that determines how the sorting is to take place. If none is provided, then the sort is
    performed according to string Unicode code points. The comparison function takes two elements as parameters. If we want the first argument to come before
    the second, we need to return a value less than 0. If we want the first argument to come after the second, we return a value greater than 0. If they are
    equal/the order for those two elements doesn't matter, we return 0;
##Does it edit the current array?
    Yes, the sort is in place and no copy of the array is made.
##What does it return?
    The sorted array
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say if you have an array of test scores and you want them sorted highest to lowest. (Function example)
    
    Or, you have an array of student names that you want sorted alphabetically (No Function example)

##Build your real world example.
*/

var scores = [90,99,72,0, 55, 100, 9001];

scores.sort(function(score1, score2){
    return score2 - score1;
});


var names = ["Jorge", "Susan", "Shaniqua", "Chan"];
names.sort();



/*
## Method: concat

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    The concat method takes as a parameter an array that is to be concatenated to the end of the array that is calling concat.
##Does it edit the current array?
    No
##What does it return?
    The new concatenated array.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say we are merging two courses and we have arrays of the names of the students that were taking each
    and we want to merge those names into one array.

##Build your real world example.
*/
var course1names = ["John", "Mark", "Matt", "Luke"];
var course2names = ["Moses", "Noah", "Joshua"];
var combinedCoursenames = course1names.concat(course2names);

/*
## Method: forEach

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
    forEach takes as a parameter a callback function that is called on every element in the array and the optional parameter of a reference Object that is used as the
    callback functions this value. The callback function takes three parameters with the last two being optional. The first is the element of the array that it is processing,
    the second is the index of the element it is processing, and the third is the array that it is working on.
##Does it edit the current array?
    Potentially, it depends on the callback function
##What does it return?
    undefined
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Lets say I have a function called payRoll and an array of employees that we want to pay. We could use the forEach method to loop through the employees array and pay each of them.

##Build your real world example.
*/
function payRoll(employee){
    employee.pay();
}
var employees = [];
employees.forEach(payRoll);

/*
## Method: includes

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The includes method takes an element to search for as a parameter and checks to see if the array contains that method 
##Does it edit the current array?
    No
##What does it return?
    True if the element is found, false if it isn't.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Lets say I am a school administrator and I have an array containing all the names of the students in a given class and I want to check if a student is in
    that course. I could use includes to quickly check if the student is in the class.

##Build your real world example.
*/

var course1names = ["John", "Mark", "Matt", "Luke", "Moses", "Noah", "Joshua", "Adam", "Enoch"];

var tru = course1names.includes("John");
var flse = course1names.includes("Apple");

/*
## Method: every

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The every method takes as parameters a callback function and an optional reference. The function is a test, returning truthy/falsy, applied to "every" element
   in the array and the reference is the value that the function will use as "this". The function takes up to 3 parameters; the first and only required parameter
   is the element to be tested. The second is the index of the current element. The third is the array that every was called upon. It is essentially the same as
   saying ∀.
##Does it edit the current array?
    No, every cannot mutate the array.
##What does it return?
    True if every element satisfies the test (i.e. returns a truthy value), false if any element returns a falsy value. **Important note: every will always return
    true if the array is empty. This can be explained in terms of sets: If you have a given test, there will not be a single element in the empty set that will fail
    that test (because there are no elements in the empty set)
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Lets say I am a school administrator and I get a large Christmas bonus if every student in the school has a GPA of 3.0 and I promised my wife a shiny new car for
    Christmas, so the pressure is on. I want to check my array that contains all the GPA's from each student to make sure I don't have to sleep on the couch at New
    Years. 

##Build your real world example.
*/

var gpas = [3.0, 3.2, 3.5, 4.0, 4.5, 3.75, 3.88];
var tru = gpas.every(function(gpa){
    return gpa >= 3.0;
});

var flse = gpas.every(function(gpa){
    return gpa >= 3.5;
});


/*
## Method: Some

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   Some is a lot like every, except it returns true if there is any element in the array that satisfies the test. Additionally, it will only test each element
   in the array until it finds an element that passes the test. So if we pass the test at index 0, we won't check index 1 - n. It is essentially the same as saying ∃.
##Does it edit the current array?
    No, some cannot mutate the array.
##What does it return?
    True if there exists an element that satisfies the test (i.e. returns a truthy value), false if no element returns a truthy value. ** Important note: Some will
    always return false if called on an empty array, because "there does not exist" any elements in it.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Same scenario as last time, except the bonus only comes if any student has a gpa greater than or equal to 4.5. 

##Build your real world example.
*/

var hereComesMyBonus = gpas.some(function(gpa){
    return gpa >= 4.5;
});

/*
## Method: Filter

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The Filter method takes as parameters a callback function and an optional reference. The function is a test that will be applied to every element in the array
    and the reference is the value that the function will use as "this". The function takes up to 3 parameters; the first and only required parameter
   is the element to be tested. The second is the index of the current element. The third is the array that every was called upon. The point of the method is to
   remove elements that do not pass the test that is given.
##Does it edit the current array?
    No, filter cannot mutate the array.
##What does it return?
    A new array with the elements that passed the test or "filtered" through. If no elements passed the test or we called filter on an empty array, we return an
    empty array.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say I'm a school administrator that wants to assign my best teachers to the students performing poorly and that I define performing poorly as having a gpa
    of less than 2.8. I would take my gpa array and filter out the gpas that are higher than 2.8 by calling the filter method on it. 

##Build your real world example.
*/

//students2help now contains the gpas of all the students who we are going to focus on
var students2help = gpas.filter(function(gpa){
    return gpa < 2.8;
})


/*
## Method: Map

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The Map method takes as parameters a callback function and an optional reference. The function will be applied to every element in the array
    and the reference is the value that the function will use as "this". The function takes up to 3 parameters; the first and only required parameter
   is the element the function will be performed on. The second is the index of the current element. The third is the array that every was called upon. The point of the method is to
   take the elements from our set (the array) and map them to a new set(the new array). If you think of mapping in mathematical terms, this method makes a whole lot of sense.
##Does it edit the current array?
    Map doesn't mutate the array, though the callback function might.
##What does it return?
    A new array with the mapping applied to every element.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say that I have an array of filenames that are written in English and I want to translate them to German and I have a helper function that accepts a filename
    as an input that creates a new file with the translated text and returns the new filename, I would call map on my array of filenames and apply my helper function to
    each 

##Build your real world example.
*/
var filenames = ["file1.txt", "file2.txt", "file3.txt"];
var translatedFiles = filenames.map(x => translateFile(x));
//OR

var translatedFiles = filenames.map(function(element){
    return translateFile(x);
});


/*
## Method: Reduce

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The reduce method executes a reducer function that we provide on each member of the array resulting in a single value. It takes as a parameter the reducing
   function and an optional initialValue that is the first value called to the reducing function. The reducing function takes four arguments, an accumulator
   (which is initialized to be the optional initialValue parameter if there is one) that accumulates the return values of each run of the function, the current
   element being processed, optionally the currentIndex or the element being processed and optionally the array itself.
##Does it edit the current array?
    No
##What does it return?
    A single value that is a result of whatever reducing function we provided
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Suppose we are a small business that wants to track the average number of hours worked by our employees and we have an array of employee objects containing,
    among other things, the number of hours each employee worked last week. We could use reduce

##Build your real world example.
*/

var employees = []; //array full of employee objects

function getAverageHours(totalHours, employee){
    return totalHours + employee.getHours();
}

//without an accumulator
var averageHours = employees.reduce(getAverageHours) / employees.length;

//with an accumulator (let's say last weeks average was 35 and we want to know the average over the two week period)
var averageHours = employees.reduce(getAverageHours, 35) / (2 * employees.length);

/*
## Method: Join

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The Join method takes a string as an optional parameter. It then concatenates every element in the array into a string separated by the parameter. If there
   was no string passed in, it uses a comma as a separator.
##Does it edit the current array?
    No
##What does it return?
    The string with all the elements concatenated together.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say I have an array of cities that I want to save to a file as a csv. The best way to do this might be using join to produce a csv string that I can use
    to write to said file.

##Build your real world example.
*/

var cities = ["New York", "San Francisco", "Chicago", "Rexburg"]
var string2write2file = cities.join();  //If I wanted them separated by dashes I would do .join("-")

/*
## Method: Find

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The find method takes as parameters a function to test each element of the array against and a reference that the function will use as this. That function 
   takes the element that is being worked on, additionally it takes 2 optional arguments the index of the element and the array.
##Does it edit the current array?
    No
##What does it return?
    The first value in the array that satisfies the test we give it. If no value passes the test or the array is empty, it returns undefined.
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say that we are a teacher that wants to give extra attention to students doing poorly and he wants to work his way through all students under a certain
    grade in no particular order. He might use the find method to find the first student in an array of grades corresponding to students to help.

##Build your real world example.
*/
grades = [90, 99, 72, 66, 84,55, 100, 9001]; 

var first2help = grades.find(function(element){
    //We want to find the first student under a B
    return element < 80;
});

/*
## Method: Splice

##What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
   The splice method inserts elements into an array, potentially overwriting old elements. It takes as parameters an index to begin at, an optional number of
   old elements to delete, and optionally, up to 253 elements to insert into the array (if none are specified, the old elements are just deleted and not replaced)
##Does it edit the current array?
    Yes, it changes the array that it is working on.
##What does it return?
    A copy of the new array it produces
##How can I use this? Come up (not one off the internet) with a small real world example and explain it.
    Let's say that we are a teacher that wants to give extra attention to students doing poorly and he wants to work his way through all students under a certain
    grade in no particular order. He might use the find method to find the first student in an array of grades corresponding to students to help.

##Build your real world example.
*/
/*

var countries = [
    {
        name:"countryName",
        states:[
            {
                name:"stateName",
                cites:[
                    {
                        name:"cityName",
                        population: 0
                    }
                ]
            }
        ]
    }
]
*/