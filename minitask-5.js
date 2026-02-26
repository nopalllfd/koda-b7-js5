let users = [
  {
    id: 1,
    username: 'nopal',
    password: 'nopal',
  },
  {
    id: 2,
    username: 'nopal2',
    password: 'nopal2',
  },
  {
    id: 3,
    username: 'nopal3',
    password: 'nopal3',
  },
];
let updatePassword = (userId, newPassword) => {
  let newAccount = {};
  if (newPassword.length < 5) {
    return console.log('Password minimum 5 karakter');
  } else {
    let i = 0;
    const account = users.find((u) => u.id == userId);
    if (!account) {
      return console.log('User tidak ditemukan');
    }

    if (account.id != undefined) {
      newAccount = {
        ...account,
        password: newPassword,
      };
    } else {
      return console.log('User tidak ditemukan');
    }
  }
  const { username, password, id } = newAccount;
  console.log(`Password updated : id ${id}, username : ${username}, Password : ${password}`);
};

updatePassword(2, 'nopalkkkl');
