const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, unique: true },
    talent: String
});

module.exports = mongoose.model('Form', formSchema);


//class FormModel {
  //  constructor(name, age, email, talent) {
    //    this.name = name;
      //  this.age = age;
        //this.email = email;
        //this.talent = talent;
   // }
//}
   
//module.exports = FormModel;