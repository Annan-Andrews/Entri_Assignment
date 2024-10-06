$("#form").validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
      maxlength: 50 
    },
    email: {
      required: true,
    },
    phone: {
      required: true,
      minlength: 10,
      maxlength: 14,
  },
  age: {
      required: true,
      min: 18,
      max: 120
  },
  gender: {
      required: true,
      minlength: 4,
      maxlength: 15
  },
  address: {
      maxlength: 50
  }
  },
  messages: {
    name: {
      required: "Enter your name",
      minlength: "Name must be at least 3 characters long",
      maxlength: "Name cannot be longer than 50 characters"
  },
  email: {
      required: "Enter your email",
      email: "Enter a valid email address"
  },
  phone: {
      required: "Enter your phone number",
      minlength: "Phone number must be at least 10 digits long",
      maxlength: "Phone number cannot be longer than 14 digits"
  },
  age: {
      required: "Enter your age",
      min: "Age must be at least 18",
      max: "Age cannot be greater than 120"
  },
  gender: {
      required: "Enter your gender",
      minlength: "Gender must be at least 4 characters",
      maxlength: "Gender cannot exceed 14 characters"
  },
  address: {
      maxlength: "Address cannot be longer than 50 characters"
  }
  }
})