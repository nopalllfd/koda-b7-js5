let updatePassword = (newPassword) => {
  let account = {
    id: 1,
    username: 'nopal',
    password: 'nopal',
  };
  let newAccount = {};
  if (newPassword.length < 5) {
    return console.log('Password minimum 5 karakter');
  } else {
    newAccount = {
      ...account,
      password: newPassword,
    };
  }
  const { username, password } = newAccount;
  console.log(`Username : ${username}, password terbaru adalah ${password}`);
};

updatePassword('nopalkkkl');
