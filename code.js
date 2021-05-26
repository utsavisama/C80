
var name_of_the_student_Array = []

function submit(){
var display_student_array = [];


for (var j = 1;j<=4;j++){
    var name_of_student = document.getElementById("name_of_the_student_" +j).value;
    console.log(name_of_student);
    name_of_the_student_Array.push(name_of_student);
}

console.log(name_of_the_student_Array);
var length_of_name_of_students_Array = name_of_the_student_Array.length;
console.log(length_of_name_of_students_Array);




console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;
var remove_commas = display_student_array.join(" ");

console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    name_of_the_student_Array.sort();
    console.log(name_of_the_student_Array);

    var Display_student_array_sorting = []
    var length_of_name_of_students_Array = name_of_the_student_Array.length;
    console.log(length_of_name_of_students_Array);


    for (var k = 0;k<length_of_name_of_students_Array;k++){
        Display_student_array_sorting.push("<h4>NAME -  "+name_of_the_student_Array[k]+"</h4>");
        console.log(Display_student_array_sorting);
    }


var remove_commas = Display_student_array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;












}