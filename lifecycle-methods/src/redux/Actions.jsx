export const addUser = (data) => {
  return(
   { type:'ADD_USER',
     payload: data
   }
  )
}
export const remove = (id) => {
    return(
     { type:'REMOVE',
       payload: id
     }
    )
  }

