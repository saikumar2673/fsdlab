class person
{
    name;
    age;
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}
class student extends person
{
    grade;
    constructor(name,age,grade)
    {
        super(name,age);
        this.grade=grade;

    }

    study()
    {
        return `${name} is studying for grade ${grade}`;
    }

}
let std=new student("sai",21,"s");
console.log(std.study());
