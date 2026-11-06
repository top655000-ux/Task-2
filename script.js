
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);
        return total / this.grades.length;
    }
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } 
        else if (average >= 80) {
            return "B";
        } 
        else if (average >= 70) {
            return "C";
        } 
        else if (average >= 60) {
            return "D";
        } 
        else if (average >= 50) {
            return "E";
        } 
        else {
            return "F";
        }
    }

    getResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } 
        else {
            return "يحتاج مراجعة";
        }
    }
}
let studentsList = [

    new Student(101, "Ahmed", [90, 85, 95], 90),

    new Student(102, "Hossam", [45, 48, 42], 80),

    new Student(103, "Reda", [70, 75, 80], 85),

    new Student(104, "Hosny", [40, 45, 48], 70)
];

console.log("===== Students Report =====");

studentsList.forEach(student => {

    console.log("Student Name:", student.name);

    console.log("Average:", student.calculateAverage());

    console.log("Grade:", student.getGrade());

    console.log("Final Result:", student.getResult());

    console.log("-------------------------");

});

let studentsNeedingMercy = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;
});

let mercyStudents = studentsNeedingMercy.map(student => {
    let newAverage = student.calculateAverage() + 5;
    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: newAverage
    };
});

let totalNewAverages = mercyStudents.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);

let mercyAverage = 0;

if (mercyStudents.length > 0) {

    mercyAverage = totalNewAverages / mercyStudents.length;
}
console.log("===== Mercy Committee Report =====");

console.log("Students Included in Mercy:", mercyStudents);

console.log("Average After Mercy:", mercyAverage);

console.log("===== End of System =====");