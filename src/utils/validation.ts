export const isValidEmail = (email: string): boolean => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  };
  export const isValidPassword = (password: string): boolean => {
    const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,10}$/;
    return reg.test(password);
  };
