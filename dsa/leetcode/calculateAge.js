function calculateAge(dob) {
    let dobDate = new Date(dob)
    let currentDate = new Date();

    let age = currentDate.getFullYear() - dobDate.getFullYear()
    const month = currentDate.getMonth() - dobDate.getMonth();

    // if birthday hasn't occured yet
    if (month < 0 || month === 0 && currentDate.getDate() < dobDate.getDate()) {
        age - 1;
    }
    return age
}


console.log(calculateAge('1990-12-30'));