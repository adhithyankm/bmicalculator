function bmi() {
    let h = height.value
    let w = weight.value
    var result = (w / h / h) * 10000

    main.innerHTML= `${"Your BMI is "}: ${parseInt(result)}`
    if (h==0&&w==0){
        output.innerHTML = "Please Enter a Valid Weight"
        main.innerHTML = "Please Enter a Valid Height"
       
    }
    else{
        if (result < 18) {
            output.innerHTML = "You are UNDERWEIGHT";
        }
    
        else if (result > 25) {
            output.innerHTML = "You are OVERWEIGHT";
        }
    
        else {
            output.innerHTML = "You are NORMAL";
        }  

    }
}