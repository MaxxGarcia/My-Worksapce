var form = document.form;

form.addEventListener("submit", function(e){
    e.preventDefault();
    var output = {};
    output.name = this.firstNameInput.value + " " + this.lastNameInput.value;
    output.age = this.ageInput.value;
    output.gender = this.genderInput.value;
    output.location = this.locationInput.value;
    output.diet = [];
    if (this.lactoseInput.checked === true){
        output.diet.push(this.lactoseInput.value)
    }
    if (this.veganInput.checked === true){
        output.diet.push(this.veganInput.value)
    }
    if (this.vegetarianInput.checked === true){
        output.diet.push(this.vegetarianInput.value)
    } 
    if (this.kosherInput.checked === true){
        output.diet.push(this.kosherInput.value)
    }
    if (this.sulfaInput.checked === true){
        output.diet.push(this.sulfaInput.value)
    }
    
    alert(
        `
        Name: ${output.name}
        Age: ${output.age}
        Gender: ${output.gender}
        Location: ${output.location}
        Diet: ${output.diet}
        
        `
    );
    return console.log(output);
    
})

