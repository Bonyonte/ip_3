function check(){
    var c=0;
    var a1=document.quiz.answer1.value;
    var a2=document.quiz.answer2.value;
    var a3=document.quiz.answer3.value;
    var a4=document.quiz.answer4.value;
    var a5=document.quiz.answer5.value;
    var a6=document.quiz.answer6.value;
    var a7=document.quiz.answer7.value;
    var a8=document.quiz.answer8.value;
    var a9=document.quiz.answer9.value;
    var a10=document.quiz.answer10.value;
    var result=document.getElementById('result');
    if (a1=="White") {c++}
    if (a2=="Art set up") {c++}
    if (a3=="To point out the flaws in the design") {c++}
    if (a4=="PhotoSHOP") {c++}
    if (a5=="True") {c++}
    if (a6=="False") {c++}
    if (a7=="True") {c++}
    if (a8=="Violet") {c++}
    if (a9=="Illustrator") {c++}
    if (a10=="Violet") {c++}
    document.write (c);
    if (c=8){
    result.textContent='Your result is $(B). Good trial.'
    } else{
        result.textContent='Your result is $(A). Excellent.'
    }
}