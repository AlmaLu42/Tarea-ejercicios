/*

Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

const commonCourses = [];
for (let course1 of student1Courses ){
    console.log( course1 ); // Math
    for(let course2 of student2Courses ){
        if( course1 === course2) commonCourses.push( course1 );
    }
}
console.log("Cursos en común: " +  commonCourses.join(", ")  );
