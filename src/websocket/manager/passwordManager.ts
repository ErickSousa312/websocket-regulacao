import { Password } from '../../@types/password';

class PasswordManager {
  private passwords: Password[] = [];
  private lastPasswordId: number = 0;

  public generatePassword(guiche: string): Password {
    this.lastPasswordId += 1;
    const newPassword: Password = {
      id: `${this.lastPasswordId}`,
      guiche,
      called: false,
    };
    this.passwords.push(newPassword);
    return newPassword;
  }

  public callNextPassword(): Password | null {
    const nextPassword = this.passwords.find((password) => !password.called);
    if (nextPassword) {
      nextPassword.called = true;
      return nextPassword;
    }
    return null;
  }

  public getAllPasswords(): Password[] {
    return this.passwords;
  }

  public getCalledPasswords(): Password[] {
    return this.passwords.filter((password) => password.called);
  }
}

export const passwordManager = new PasswordManager();
