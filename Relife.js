document.getElementById("nameofch").innerHTML=localStorage.getItem("noch");
var gen=localStorage.getItem("goch");


if(gen==="female")
{
	hdr.src="https://www.svgrepo.com/show/82208/female-avatar.svg";
}
else if(gen==="male")
{
	hdr.src="https://www.svgrepo.com/show/82208/female-avatar.svg";
}
else if (gen==="trans") 
{
	hdr.src="";
}
else 
{
	hdr.src="";
}



var health = 100;
var healthbar = 100;
var smarts = 100;
var smartsbar = 100;
var happy = 100;
var happybar = 100;
var money = 0;
var age = 1;
var salary = 0;
var property = 0;
var cars = 0;
var school = 0;
var relationships = 1;
var userans = false;
var jobxp = 0;
var popularity = 10;
var grades=30;
var relations = Math.floor(Math.random()*(5-1))+1;
var Law = ['Jr. Lawyer','Sr. Lawyer','Partner','Magistrate']
var Engineering = ['Software Engineer','Senior Engineer','Principle Engineer','Distinguished Engineer']
var Medical = ['Doctor','Specialist','Specialist Surgeon','Dean of Hospital']
var Business = ['Manager','Secretary','President','Director']
var relationcount = ['Father','Mother','Brother','Sister']
var edu = 1;

class Person{
	constructor(name, gender, age){
		this.nfirst = name.split(" ")[0];
		this.nlast = name.split(" ")[1];
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.sexuality = randomChoiceFromArr(sexualities);
		this.is_transsexual = false;
		this.can_die = true;
		this.deceased = false;
		this.is_married = false;
		this.adopted = randomChoiceFromArr([true, false, false, false]);
		this.spouse = null;
		this.so = null; //Signifigant other
		this.friends = [];
		this.children = [];
		this.flings = [];
		this.exes = [];
		this.siblings = [];
		this.parents = [];
		this.cousins = [];
		this.occupation = null;
		this.pl_relationship = 50;
	}
    generateParentsAtRandom() {
		var gender1 = randomChoiceFromArr(genders);
		var gender2 = randomChoiceFromArr(genders);
		this.parents.push(new Person(randomChoiceFromArr(names[gender1]) + " " + this.nlast, gender1, this.age + 20));
		this.parents.push(new Person(randomChoiceFromArr(names[gender2]) + " " + this.nlast, gender2, this.age + 20));
		this.parents[0].children.push(this);
		this.parents[1].children.push(this);
		this.parents[0].spouse = this.parents[1];
		this.parents[1].spouse = this.parents[0];
		this.parents[0].is_married = true;
		this.parents[1].is_married = true;
function display() {
    document.getElementById("Moneybar").innerHTML =
      "Money: " + money.toFixed(2) + "$";
    healthbar = document.getElementById("Healthbar");
    smartsbar = document.getElementById("smartsbar");
    happybar = document.getElementById("happybar");
    moneybar = document.getElementById("Moneybar");
    document.getElementById("propertyshow").innerHTML =
      "property: " + foodinfridge.toFixed(1);
    document.getElementById("ecarshow").innerHTML =
      "cars: " + ecar.toFixed(0);
    healthbar.value = health;
    smartsbar.value = smarts;
    happybar.value = happy;
    moneybar.value=money;
    document.getElementById("age").innerHTML =
      "age: " +
      "<br>" +
    document.getElementById("salary").innerHTML ;  "Your salary is: " + jobpost.toFixed(0) * 15 + "$";
    jobname = document.getElementById("jobnameinput").value;
    document.getElementById("jobname").innerHTML = jobname;
    document.getElementById("salaryshow").innerHTML = "salary: " + salary.toFixed(0);
    salary = jobpost * 15;
  
  
    if (money >= 1000000000000 && money < 1000000000000000) {
      document.getElementById("moneyshow").innerHTML =
        "Money: " + money.toFixed(8) / 1000000000000 + "T$";
    } else if (money >= 1000000000 && money < 1000000000000) {
      document.getElementById("moneyshow").innerHTML =
        "Money: " + money.toFixed(4) / 1000000000 + "B$";
    } else if (money >= 1000000 && money < 1000000000) {
      document.getElementById("moneyshow").innerHTML =
        "Money: " + money.toFixed(2) / 1000000 + "M$";
    } else if (money >= 1000) {
      document.getElementById("moneyshow").innerHTML =
        "Money: " + money.toFixed(2) / 1000 + "K$";
    } else {
      document.getElementById("moneyshow").innerHTML =
        "Money: " + money.toFixed(2) + "$";
    }
  

  
    if (energy <= 0) {
      health = health - 1 / 25;
    }
    if (food <= 0) {
      health = health - 1 / 25;
    }
  
    if (happy > 100) {
      happy = 100;
    }
    if (health > 100) {
      health = 100;
    }
    if (smarts > 100) {
      smarts = 100;
    }
  
    if (health <= 0) {
      smarts = 0;
      happy = 0;
    }
  
  
      
    setTimeout("display();", 1);
  }
  class Person{
	constructor(name, gender, age){
		this.nfirst = name.split(" ")[0];
		this.nlast = name.split(" ")[1];
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.sexuality = randomChoiceFromArr(sexualities);
		this.is_transsexual = false;
		this.can_die = true;
		this.deceased = false;
		this.is_married = false;
		this.adopted = randomChoiceFromArr([true, false, false, false]);
		this.spouse = null;
		this.so = null; //Signifigant other
		this.friends = [];
		this.children = [];
		this.flings = [];
		this.exes = [];
		this.siblings = [];
		this.parents = [];
		this.cousins = [];
		this.occupation = null;
		this.pl_relationship = 50;
	}
	
	generateParentsAtRandom() {
		var gender1 = randomChoiceFromArr(genders);
		var gender2 = randomChoiceFromArr(genders);
		this.parents.push(new Person(randomChoiceFromArr(names[gender1]) + " " + this.nlast, gender1, this.age + 20));
		this.parents.push(new Person(randomChoiceFromArr(names[gender2]) + " " + this.nlast, gender2, this.age + 20));
		this.parents[0].children.push(this);
		this.parents[1].children.push(this);
		this.parents[0].spouse = this.parents[1];
		this.parents[1].spouse = this.parents[0];
		this.parents[0].is_married = true;
		this.parents[1].is_married = true;	
	}
  function age(){
      age = age + 1;
      var rand=Math.floor(Math.random()*(100-30))+30;
      var ran=Math.floor(Math.random()*(5-2))+2;
      health = health - ran;
      smarts=smarts+ran;
      document.getElementById("result").innerHTML="Age "+age + ":";
       
      if (age >= rand){
          alert("you died");
      }
    }
  function Study(){
      if (smarts!= 100){
          smarts = smarts + 5;
          jobxp = jobxp + 5;
          grades=grades+5;
      }
  function Popularity(){
      if (popularity != 100)
      {
          popularity = popularity + 5;
          smarts = smarts + 1 ; 

      }
    }
    function Schooling(){
        if (age >= 5){
            alert("you have been enrolled to primary school");
            edu = edu + 1;
        if (age >=12 && edu == 2){
            alert("you have been enrolled to Secondary School");
            edu = edu + 1;
        }
        if (age >= 17 && edu==3)
        {
            alert("Do you want to attend a university");
            if(userans==true)
            {
                userans=confirm("choose a field");
            }

        }
        }
        }
    function Skipschool() 
    {
			grades=grades-5;
			if (smarts>=5) 
			{
					smarts=smarts-5;
			}
    }
 }

















