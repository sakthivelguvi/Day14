const countryDropdown=document.getElementById('countryDropdown');
const StateDropdown=document.getElementById('StateDropdown');
const DistrictDropdown=document.getElementById('DistrictDropdown');

const state = {
    India: [ 'TamilNadu','Telunga','Andra','Karnataka'],    
    USA :[ 'California','Los Angels','Texas']
}
const District={
    TamilNadu:['Salem','Chennai','Thiruvallur','kanchipuram'],
    California:['vijayavada','Tirupati']
}

let populateStates=(StateDropdown,data)=>{
    StateDropdown.innerHTML ='';
let option =document.createElement('option');
option.text='--select state--';
StateDropdown.appendChild(option);
data.forEach((state)=>{
    let option =document.createElement('option');
    option.value=state;
    option.text=state;
    StateDropdown.appendChild(option);
});
}
let populateDistrict=(DistrictDropdown,data)=>{
    DistrictDropdown.innerHTML ='';
let option =document.createElement('option');
option.text='--select District--';
DistrictDropdown.appendChild(option);
data.forEach((District)=>{
    let option =document.createElement('option');
    option.value=District;
    option.text=District;
    DistrictDropdown.appendChild(option);
});
}
countryDropdown.addEventListener('change',function(){
    populateStates(StateDropdown, state[countryDropdown.value]);
});
StateDropdown.addEventListener('change',function(){
    populateDistrict(DistrictDropdown,District[StateDropdown.value]);
});