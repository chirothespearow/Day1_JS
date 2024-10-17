class Student{
    constructor(id,name,course,semester,html,css,js){
        this.id = id;
        this.name = name;
        this.course = course;
        this.semester = semester;
        this.html = html;
        this.css = css;
        this.js = js;
    }

    displayDetails(){
        console.log(`Student ID = ${this.id}\nName = ${this.name}\nCourse = ${this.course}\nSemester = ${this.semester}\n`);
    }

    checkValid(marks){
        return !(marks < 0 || marks > 100) 
    }
    displayMarks(){
        if(!this.checkValid(this.html) || !this.checkValid(this.css) || !this.checkValid(this.js)){
            console.log("Invalid marks entry");
            return;
        }
        console.log(`Your score in all subjects (out of 100):\nHTML : ${this.html}\nCSS : ${this.css}\nJavascript : ${this.js}\n`);
    }

    displayPercentage(){
        var percent = ((this.html+this.css+this.js)/300) * 100;
        console.log("Total marks out of 300 : ",this.html+this.css+this.js);
        console.log(`Percentage of student is ${percent}`);
    }

    displayAll(){
        this.displayDetails();
        this.displayMarks();
        this.displayPercentage();
    }
}

var student1 = new Student(1232,"Ram","CS",4,90,85,89);
var student2 = new Student(1543,"Rahul","EE",5,93,88,99);
var student3 = new Student(997,"Shyam","EE",4,88,95,79);

student1.displayAll();
student2.displayAll();
student3.displayAll();