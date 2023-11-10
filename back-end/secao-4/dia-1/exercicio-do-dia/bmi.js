const readline = require('readline-sync');

function BMI(weight, height) {
  const heightInMeters = height/100;
  const squaredHeight = heightInMeters ** 2;

  const BMI = weight / squaredHeight;

  return BMI;
}

const BMICategories = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, 
  },
};

function weightCategory(bmi) {
  const weightStatus = Object.keys(BMICategories);

  const result = weightStatus.find((status) => {
    const {maxBMI, minBMI} = BMICategories[status] 
    const withinMin = minBMI ? bmi > minBMI : true;
    const withinMax = maxBMI ? bmi < maxBMI : true;

    return withinMin && withinMax
  });

  return result;
}

function main() {
  const weight = readline.questionFloat('What is your weight? (kg)');
  const height = readline.questionInt('What is your height? (cm)');

  const bmi = BMI(weight, height).toFixed(2);
  const BMIResult = weightCategory(bmi);
  
  console.log(`Your BMI is ${bmi} and your weight category is ${BMIResult}`);
}

main();