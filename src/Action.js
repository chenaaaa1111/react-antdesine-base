export const TEST="TEST"

export function changeTest(action){
    console.log("action test")
    return (dispatch)=> {
        dispatch({
            type:TEST,
            payload:action
        })
      
    }
}