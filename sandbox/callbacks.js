var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Diziam'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(57, (user) => {
  console.log(user);
});
