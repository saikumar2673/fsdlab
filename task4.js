class student
{
    name;
    grade;
    getGrade()
    {
        return this.grade;
    }
    study()
    {
        console.log(name+" student is studying");
    }

    constructor(name,grade)
    {
        this.name=name;
        this.grade=grade;
    }
}
let std1=new student("Saikumar","s");
let std2=new student("shiva","A+");
std1.study();
console.log(std2.getGrade());