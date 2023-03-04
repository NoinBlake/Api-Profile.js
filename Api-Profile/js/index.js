const contenedor = document.getElementById("caja");

// API
const URL  = "https://reqres.in/api";

// Esta funcion va a retornar la card del html
const renderUser = user => {
    console.log(user)
    const {email,first_name,last_name,avatar}=user;
    
    return `
        <div class="card">
            <div class="img">
                <img class="avatar" src="${avatar}" alt="${first_name}" />
            </div>
            <h2>${first_name} ${last_name}</h2>
            <p>${email}</p>
        </div>
    `;
} 

// logica para imprimir
const renderUsers = ({users}) =>{
    caja.innerHTML = renderUser(users)
};

const getUsers = async ({int})=>{
    try{
        const res = await fetch(`${URL}/users?page=${[1]}`);
        const json = await res.json();
        const data = json.data;

        const dataIndex = data[int];
        console.log(dataIndex)
        renderUsers({users:dataIndex})
    }catch(error){
        return error;
    }
}


const click = ()=>{
    let imgLength = 0;
    window.addEventListener("click", (event)=>{
        
        const arrow =event.target.attributes[0].nodeValue;
        if(arrow === "left" ){
            imgLength -= 1;
            console.log(imgLength)
            if(imgLength<0){
                imgLength=0;
            }
            getUsers({int:imgLength});
        }
        if(arrow === "right"){
            imgLength+=1
            console.log(imgLength)
            if(imgLength>5){
                imgLength=5;
            }
            getUsers({int:imgLength});
        }

        
        
    })
    return getUsers({int:0});
}


click();
