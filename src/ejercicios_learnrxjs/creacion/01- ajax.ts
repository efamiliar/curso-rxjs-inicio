import { ajax } from 'rxjs/ajax';

const githubUsers = `https://api.github.com/users?per_page=2`;

const users = ajax(githubUsers);

const subscribe = users.subscribe(
  res => console.log(res),
  err => console.error(err)
);
