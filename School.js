let STUDENT={
    // example students for testing
    bob:{
      name:"bob",
      img:"link",
      gender:0,//0 is male, 1 is female, 2 is other
      race:"black",
      annualIncome:80000,
      gpa:3.7,
      age:18,
      hasLegacy:true,
      isFirstGeneration:false,
      requiresFinancialAid:false,
      isAthlete:true,
      preferredMajor:"computer science",
      extracurriculars:["tuba","volunteers for Habitat for Humanity","scoops ice cream at Baskin Robbins"],
      essay:"The quick brown fox jumps over the lazy dog",
      isEarlyDecision:true
    },
    jane:{
      name:"jane",
      img:"link",
      gender:1,
      race:"caucasian",
      annualIncome:70000,
      gpa:3.6,
      age:18,
      hasLegacy:false,
      isFirstGeneration:true,
      requiresFinancialAid:true,
      isAthlete:true,
      preferredMajor:"political science",
      extracurriculars:["cheer","volunteers for local soup kitchen","tutors kids in algebra and history"],
      essay:"Belle Delphine did 9/11",
      isEarlyDecision:true
    }
  }



  let COLLEGES={
    // CHANGE ALL GPA QUOTAS TO 0 to 4.0 scale, or change the way the calculateGPA function works
    PRINCETON:{
      requiredSchoolLegacy:60,
      requiredSchoolWealth:80,
      requiredSchoolDiversity:20,
      requiredSchoolSports:70,
      requiredSchoolGPA:80
    },
    HARVARD:{
      requiredSchoolLegacy:60,
      requiredSchoolWealth:80,
      requiredSchoolDiversity:20,
      requiredSchoolSports:60,
      requiredSchoolGPA:80
    },
    YALE:{
      requiredSchoolLegacy:25,
      requiredSchoolWealth:75,
      requiredSchoolDiversity:30,
      requiredSchoolSports:65,
      requiredSchoolGPA:90
    },
    STANFORD:{
      requiredSchoolLegacy:15,
      requiredSchoolWealth:70,
      requiredSchoolDiversity:20,
      requiredSchoolSports:80,
      requiredSchoolGPA:89
    },
    MIT:{
      requiredSchoolLegacy:5,
      requiredSchoolWealth:70,
      requiredSchoolDiversity:35,
      requiredSchoolSports:40,
      requiredSchoolGPA:92
    },
    UCHICAGO:{
      requiredSchoolLegacy:12,
      requiredSchoolWealth:60,
      requiredSchoolDiversity:5,
      requiredSchoolSports:40,
      requiredSchoolGPA:75
    },
    CALTECH:{
      requiredSchoolLegacy:15,
      requiredSchoolWealth:50,
      requiredSchoolDiversity:30,
      requiredSchoolSports:10,
      requiredSchoolGPA:88
    },
    GEORGETOWN:{
      requiredSchoolLegacy:35,
      requiredSchoolWealth:45,
      requiredSchoolDiversity:15,
      requiredSchoolSports:10,
      requiredSchoolGPA:65
    },
    UPENN:{
      requiredSchoolLegacy:15,
      requiredSchoolWealth:40,
      requiredSchoolDiversity:30,
      requiredSchoolSports:30,
      requiredSchoolGPA:70
    },
    NORTHWESTERN:{
      requiredSchoolLegacy:15,
      requiredSchoolWealth:30,
      requiredSchoolDiversity:40,
      requiredSchoolSports:15,
      requiredSchoolGPA:65
    },
    BERKELEY:{
      requiredSchoolLegacy:10,
      requiredSchoolWealth:30,
      requiredSchoolDiversity:35,
      requiredSchoolSports:30,
      requiredSchoolGPA:65
    },
    CARNEGIEMELLON:{
      requiredSchoolLegacy:20,
      requiredSchoolWealth:35,
      requiredSchoolDiversity:40,
      requiredSchoolSports:30,
      requiredSchoolGPA:50
    },
    CORNELL:{
      requiredSchoolLegacy:30,
      requiredSchoolWealth:70,
      requiredSchoolDiversity:25,
      requiredSchoolSports:35,
      requiredSchoolGPA:75
    },
    UCLA:{
      requiredSchoolLegacy:15,
      requiredSchoolWealth:60,
      requiredSchoolDiversity:40,
      requiredSchoolSports:45,
      requiredSchoolGPA:65
    },
    DUKE:{
      requiredSchoolLegacy:35,
      requiredSchoolWealth:60,
      requiredSchoolDiversity:20,
      requiredSchoolSports:30,
      requiredSchoolGPA:80
    },
    WILLIAMS:{
      requiredSchoolLegacy:10,
      requiredSchoolWealth:40,
      requiredSchoolDiversity:30,
      requiredSchoolSports:10,
      requiredSchoolGPA:35
    },
    AMHERST:{
      requiredSchoolLegacy:20,
      requiredSchoolWealth:50,
      requiredSchoolDiversity:55,
      requiredSchoolSports:15,
      requiredSchoolGPA:60
    },
    SWARTHMORE:{
      requiredSchoolLegacy:10,
      requiredSchoolWealth:20,
      requiredSchoolDiversity:35,
      requiredSchoolSports:30,
      requiredSchoolGPA:40
    },
    getQuotas:function(college){
      return([college.requiredSchoolLegacy,college.requiredSchoolWealth,college.requiredSchoolDiversity,college.requiredSchoolSports,college.requiredSchoolGPA]);
    }


  }




  let SCHOOL={
    name:="",
    characteristics:{
      schoolLegacy:,
      schoolWealth:,
      schoolDiversity:,
      schoolSports:,
      schoolGPA:,
      changeCurrents:function(leg,weal,div,spo,newgpa){
        this.schoolLegacy=leg;
        this.schoolWealth=weal;
        this.schoolDiversity=div;
        this.schoolSports=spo;
        this.schoolGPA=newgpa;
      }
    },
    targetCharactersitics:{
      schoolLegacy:,
      schoolWealth:,
      schoolDiversity:,
      schoolSports:,
      schoolGPA:,
      importCharacteristics:function(quotas){
        this.schoolLegacy=quotas[0];
        this.schoolWealth=quotas[1];
        this.schoolDiversity=quotas[2];
        this.schoolSports=quotas[3];
        this.schoolGPA=quotas[4];
      }
    },
    students:[],
    accepted:[],
    deferred:[],
    rejected:[],
    numOfStudents:,
    // add function to import from college database
    accept:function(student){
      if(!this.students.includes(student)){
        this.students.push(student);
        this.accepted.push(student);
        numOfStudents++;
        if(student.hasLegacy){
          this.characteristics.schoolLegacy++;
        }
        if(student.isAthlete){
          this.characteristics.schoolSports++;
        }
        if(student.requiresFinancialAid){
          this.characteristics.schoolWealth++;
        }
        this.characteristics.schoolDiversity+=this.computeDiversity(student); // computeDiversity(student) should be a computeDiversity() function in student class
        this.characteristics.schoolGPA+=student.gpa;
      } else{
        console.log("Student is already enrolled.");
        alert("Student is already enrolled.");
      }
    },
    computeDiversity:function(student){ // PUT THIS IN STUDENT CLASS
      let total=0;
      total+=student.gender;
      if(student.race=="caucasian"){
        total+=1;
      } else if(stud.race!="asian"){
        total+=2;
      }
      return(total);
    },
    calculateLegacy:function(){
      return(this.characteristics.schoolLegacy/this.numOfStudents*100);
    },
    calculateWealth:function(){
      return(this.characteristics.schoolWealth/this.numOfStudents*100);
    },
    calculateDiversity:function(){
      return(this.characteristics.schoolDiversity/this.numOfStudents*100);
    },
    calculateSports:function(){
      return(this.characteristics.schoolSports/this.numOfStudents*100);
    },
    calculateGPA:function(){
      return(this.characteristics.schoolGPA/this.numOfStudents);
    },
    getCollegeStats:function(){
      return([this.characteristics.schoolLegacy,this.characteristics.schoolWealth,this.characteristics.schoolDiversity,this.characteristics.schoolSports,this.characteristics.schoolGPA]);
    },
    //checks if at least 3 of the characteristics are (margin) away from target values
    isWithinTargets:function(marginError){
      let numOutsideRange=0;
      if(this.targetCharacteristics.schoolLegacy-this.characteristics.schoolLegacy>marginError||this.targetCharacteristics.schoolLegacy-this.characteristics.schoolLegacy<0-marginError){
        numOutsideRange++;
      }
      if(this.targetCharacteristics.schoolWealth-this.characteristics.schoolWealth>marginError||this.targetCharacteristics.schoolWealth-this.characteristics.schoolWealth<0-marginError){
        numOutsideRange++;
      }
      if(this.targetCharacteristics.schoolDiversity-this.characteristics.schoolDiversity>marginError||this.targetCharacteristics.schoolDiversity-this.characteristics.schoolDiversity<0-marginError){
        numOutsideRange++;
      }
      if(this.targetCharacteristics.schoolSports-this.characteristics.schoolSports>marginError||this.targetCharacteristics.schoolSports-this.characteristics.schoolSports<0-marginError){
        numOutsideRange++;
      }
      if(this.targetCharacteristics.schoolGPA-this.characteristics.schoolGPA>marginError||this.targetCharacteristics.schoolGPA-this.characteristics.schoolGPA<0-marginError){
        numOutsideRange++;
      }
      return(numOutsideRange>=3);
    },
    //only value to be inputted to initialize the school, all other values will come from the college database
    /**name:"default",
    isQuotaSatisfied:true,
    currentNumOfStudents:1,
    targetNumOfStudents:1,
    numFinancialAidStudents:1,
    studentDecisionAmountFromQuotaUnsatisfied:1,**/
    //contains Application objects
    //defered:[],
    /**currentCharacteristics : {
    //values of characteristics range from 1-100
    legacy:1,
    wealth:2,
    diversity:3,
    sports:4,
    gpa:5,
    //helper function for the overall test function
    displayCurrents:function(){
      return "cLeg:"+this.legacy+" cWeal:"+this.wealth+" cDiv:"+this.diversity+"cSpor:"+this.sports+" cGPA:"+this.gpa;
    },**/
    //should take in 5 ordered ints to replace the current characteristics
    //
    /**targetCharacteristics : {
    //values of characteristics range from 1-100
    targetLegacy:90,
    targetWealth:91,
    targetDiversity:92,
    targetSports:93,
    targetGPA:94,
    //helper function for the overall test function
    displayTargets:function(){
      return "tLeg:"+this.targetLegacy+" tWeal:"+this.targetWealth+" tDiv:"+this.targetDiversity+" tSpor:"+this.targetSports+" tGPA:"+this.targetGPA;
      }
    },**/
    //not to be implemented quite yet
    endGame:function(){},
    triggerEvent:function(){},
    //test function to display the values of the variables
    testDisplayVals:function(){
      console.log("name: "+this.name);
      console.log("target characteristics: "+(this.targetCharacteristics.displayTargets())+"");
      console.log("current characteristics: "+this.currentCharacteristics.displayCurrents()+"");
      //console.log("is within targets: "+this.isWithinTargets(20))
    }
  }

//ADD THIS IN STUDENT
updateQuotas(){
  if (this.legacy){
    var legacyQuota = document.getElementById("legacyQuo");
    let legInnerTxt = legacyQuota.innerText.split();//an array
    legacyQuota.innerHTML += (legInnerTxt[1]+1);
  }
  //diversityQuo
  if (this.race != "white"){
    var diversityQuota = document.getElementById("diversityQuo");
    let divInnerTxt = diversityQuota.innerText.split();//an array
    diversityQuota.innerHTML += (divInnerTxt[1]+1);
  }
  //sportsqou
  if (this.isAthlete){
    var sportsQuota = document.getElementById("sportsQuo");
    let sportsInnerTxt = sportsQuota.innerText.split();//an array
    sportsQuota.innerHTML += (sportsInnerTxt[1]+1);
  }


  if(this.gpa >= 3.9){
    var gpaQuota = document.getElementById("gpaQuo");
    let gpaInnerTxt = gpaQuota.innerText.split();
    gpaQuota.innerHTML += (gpaInnerTxt[1]+1);
  }
  //wealthQuo

  if(this.donor){
    var wealthQuota = document.getElementById("wealthQuo");
    let wealthInnerTxt = wealthQuota.innerText.split();
    wealthQuota.innerHTML += (wealthInnerTxt[1]+1);
  }

  if(this.requiresAid){
    //if requores financial aid wealth goes down one
    var wealthQuota = document.getElementById("wealthQuo");
    let wealthInnerTxt = wealthQuota.innerText.split();
    wealthQuota.innerHTML += (wealthInnerTxt[1]-1);
  }

}
