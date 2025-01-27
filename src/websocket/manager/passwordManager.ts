import { Password, PasswordGenerate } from '../../@types/password';
import { getPassword } from '../utils/generatePasswords';

class PasswordManager {
  private passwords: Password[] = [];
  private passwordsGenerate: PasswordGenerate[] = [];
  private lastPasswordId: number = 0;

  public generatePasswordSolo(priority?: boolean): PasswordGenerate {
    let getPasswordSolo;
    if (priority) {
      getPasswordSolo = getPassword(priority);
    } else {
      getPasswordSolo = getPassword();
    }

    const newPassword: PasswordGenerate = {
      id: `${getPasswordSolo}`,
      called: false,
    };
    this.passwordsGenerate.push(newPassword);
    return newPassword;
  }
  public generatePasswordGuiche(guiche: string): Password {
    this.lastPasswordId += 1;
    const newPassword: Password = {
      id: `${this.lastPasswordId}`,
      guiche,
      called: false,
    };
    this.passwords.unshift(newPassword);
    return newPassword;
  }

  public callNextPassword(guiche: string, priority?: boolean): Password | null {
    let nextPassword: PasswordGenerate | undefined = undefined;
    if (priority) {
      nextPassword = this.passwordsGenerate.find((password) => {
        return !password.called && password.id.startsWith('P');
      });
      if (!nextPassword) {
        return null;
      }
    } else {
      nextPassword = this.passwordsGenerate.find((password) => {
        return !password.called;
      });
    }

    this.passwordsGenerate = this.passwordsGenerate.map((password) => {
      if (password.id === nextPassword?.id) {
        return {
          ...password,
          called: true,
        };
      }
      return password;
    });
    console.log(this.passwordsGenerate);
    if (!nextPassword) {
      return null;
    }
    const passwordWithGuiche = {
      id: nextPassword?.id,
      guiche,
      called: true,
    };
    this.passwords.push(passwordWithGuiche);
    return passwordWithGuiche;
  }

  public getAllPasswords(): Password[] {
    return this.passwords.slice().reverse();
  }
  public getAllPasswordsGenerated(): PasswordGenerate[] {
    return this.passwordsGenerate;
  }
  public excludeAllPasswords() {
    this.passwordsGenerate = [];
  }
  public excludeAllData() {
    this.passwordsGenerate = [];
    this.passwords = [];
  }

  public getCalledPasswords(): Password[] {
    return this.passwords.filter((password) => password.called);
  }

  public getLastCalledPassword(): Password | undefined {
    return this.passwords
      .slice()
      .reverse()
      .find((password) => password.called);
  }
}

export const passwordManager = new PasswordManager();
