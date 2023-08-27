function bmiCalculator (weight, height) {

    var bmiCalculator = weight/Math.pow(height);
    var interpretation;

    if  (bmiCalculator < 18.5) {
       interpretation = "Your BMI is " + bmiCalculator + " , so you are underweight.";
    } else if (bmiCalculator <= 18.5 && bmiCalculator >= 24.9){
       interpretation = "Your BMI is " + bmiCalculator + " , so you have a normal weight.";

    } else{
        interpretation = "Your BMI is " + bmiCalculator + " , so you are overweight.";
    }

    return interpretation;
}
