import { HttpInterceptorFn } from "@angular/common/http";


export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem("token");
  if(token){
    req = req.clone({
      setHeaders: {"x-token":token}
    }) 
  }

  return next(req);
};
