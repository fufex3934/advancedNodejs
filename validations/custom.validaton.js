const validator = require('validator');
const password = (value,helpers)=>{
if (!validator.isStrongPassword(value)){
    return helpers.message('password should atleast be 8 characters with one uppercase and lowercase letter, number and special character')

}
return value;
};

module.exports = {
    password,
}