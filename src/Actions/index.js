import Axios from "axios"
import { FETCH_PROFILES,Create_PROFILE ,DELETE_PROFILE,EDIT_PROFILE} from "./Constants"


const url= "http://localhost:3000/Profiles"

       

export const selectProfilesAction=(animal)=>{
    console.log("object",animal)
    return {
        type:'ANIMAL_CLICKED',
        payload:animal
    }
}



// export function getProfilesListAction(){
//     const url= 'http://localhost:3000/profiles'
//     const res=Axios.get(url);
 
//     return {
//         type:FETCH_PROFILES,
//         payload:res
//     }
// }

export function getProfilesListAction(){
    
    return function(dispatch){
    
        const Request=Axios.get(url)
        Request.then(res =>{
            dispatch({
                type:FETCH_PROFILES,
                payload:res.data
            })
        })
        .catch(err=>console.log(err))
    }
}

export const createProfileAction=(profile)=>{
    
    return function(dispatch){

      const data={
      name:profile.Profilename,
      gender:profile.Gender,
      age:profile.Age
    }
        const Post=Axios.post(url,data)
        Post.then(res =>{
            dispatch({
                type:Create_PROFILE,
                payload:res.data
            })
        })
        .catch(err=>console.log(err))
    }
    }
    export const deleteProfileAction=(id)=>{
    
        return function(dispatch) {
            const del = Axios.delete(`${url}/${id}`);
        
            del.then( response => {
              dispatch({
                type: DELETE_PROFILE,
                payload: response.status,
                id: id
              })
            }).catch(err => console.log(err))
          }
        }

        export const editProfileAction=(edit)=>{
    
            return function(dispatch) {

                const data={
                    name:edit.Profilename,
                    gender:edit.Gender,
                    age:edit.Age
                  }
                const PUT = Axios.put(`${url}/${edit.id}`,data);
            
                PUT.then( response => {
                  dispatch({
                    type: EDIT_PROFILE,
                    payload: response.status,
                    id: edit.id
                  })
                }).catch(err => console.log(err))
              }
            }