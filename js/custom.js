
    //property.value
var student1={
    fname:"kuldeep",
    lname:'lohar',
    address:"sarwaniya maharaj",
    education:"BA",
   
}
  console.log(student1.fname)
  console.log(student1.lname)
  console.log(student1.address)
  console.log(student1['education'])


let student2={
  fname:' rohit',
  lname:' mali',
  address:" neemuch",
  education:' BCA',

  getFullDetails(){
    console.log('hy '+this.fname +this.lname +this.address +this.education)
  }
  }
  
  console.log(student2.getFullDetails())//access with js function
  



  