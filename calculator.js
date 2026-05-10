document.getElementById('calorieCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activityFactor = calculateActivityFactor(document.getElementById('activityLevel').value);

    if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
        let bmr = 0;
        // Формула Харриса-Бенедикта для расчета BMR
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === 'female') {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        const dailyCalories = Math.round(bmr * activityFactor);
        document.getElementById('result').innerHTML = `<strong>Вам требуется примерно ${dailyCalories} ккал в сутки.</strong>`;
    } else {
        alert("Пожалуйста, введите правильные значения.");
    }
});

// Коэффициенты физической активности
function calculateActivityFactor(activity) {
    switch (activity) {
        case 'sedentary':
            return 1.2;
        case 'lightlyActive':
            return 1.375;
        case 'moderatelyActive':
            return 1.55;
        case 'veryActive':
            return 1.725;
        default:
            return 1.2;
    }
}
