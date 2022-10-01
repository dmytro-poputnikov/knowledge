//Optional chaining
const phone = {
  model: { name: "Samsung" },
  price: 1000,
};

//old
if (phone.brand) console.log(phone.brand);

//new
console.log(phone?.brand);
