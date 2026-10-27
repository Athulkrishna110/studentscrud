let students=[]

//add studentrs to array

if(sessionStorage.getItem("students")){
  students =JSON.parse(sessionStorage.getItem("students"))
  displaystudentslist()
}

studentform.addEventListener('submit',(event)=>{
    event.preventDefault()
  const studentidinput= sid.value
  const studentnameinput=sname.value
  const studentcourseinput=scourse.value
  const index=editStatus.value

 if(studentidinput&&studentnameinput&&studentcourseinput){

    if(index==''){
        students.push({id:studentidinput, name:studentnameinput,course:studentcourseinput})
    }
    else{
        students[index]={id:studentidinput, name:studentnameinput,course:studentcourseinput}
    }
}else{
    alert("please enter correctly ")
  }

  
studentform.reset()

sessionStorage.setItem('students',JSON.stringify(students))
displaystudentslist()


})

// display students from the array

function displaystudentslist(){
    tbody.innerHTML=""
    students.forEach((item,index)=>{
        tbody.innerHTML +=` <tr>
                <td>${index +1}</td>
                 <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.course}</td>
               
                <td>
                    <button onclick="edituser(${index})" class="btn btn-warning">edit</button>
                    <button onclick="deletestudent(${index})" class="btn btn-danger">delete</button>
                </td>
            </tr>`
    })
}


// edit students form the array

function edituser(userindex){
  const edituserdetails=students[userindex]
  sid.value=edituserdetails.id
  sname.value= edituserdetails.name
  scourse.value=edituserdetails.course
  editStatus.value=userindex
}

// delete from the array

function deletestudent(userindex){
 if(confirm(" are you sure you want to delete the students details")){
  students.splice(userindex,1)
  sessionStorage.setItem("students",JSON.stringify(students))
  displaystudentslist()
 }
}