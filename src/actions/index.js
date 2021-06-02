export const CHANGE_INFO = 'CHANGE_INFO'

export const changeInfo = (value) => ({
    type: CHANGE_INFO,
    payload: {
      value,
    }, 
});
