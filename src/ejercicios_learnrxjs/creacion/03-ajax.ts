import { ajax, AjaxRequest } from 'rxjs/ajax';

const githubUsers = `https://api.github.com/users?per_page=2`;

const req:AjaxRequest = {
  url: githubUsers,
  headers: {},
  method: 'GET'
}

const users = ajax( req );

const subscribe = users.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('complete')
);