import { CanActivateFn } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem("token");
  return token != null && token != "";
};
