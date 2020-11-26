export const userSelector=(state)=>state.user;

export const userName=(state)=>userSelector(state).name;
export const userCounry=(state)=>userSelector(state).country.name;
export const userZipCode=(state)=>userSelector(state).zipCode;