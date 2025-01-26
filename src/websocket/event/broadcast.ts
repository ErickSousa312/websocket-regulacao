import { WebSocket, WebSocketServer } from 'ws';
import { Password } from '../../@types/password';
import { passwordManager } from '../manager/passwordManager';

export function broadcast(wss: WebSocketServer, message: string) {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(message);
    }
  });
}

export function broadcastAttPasswords(wss: WebSocketServer): void {
  const allpasswords = passwordManager.getAllPasswords();
  console.log(passwordManager.getAllPasswordsGenerated());

  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(
        JSON.stringify({
          type: 'broadcast',
          data: allpasswords,
          currentPassword: passwordManager.getLastCalledPassword(),
          allPasswordGenerated: passwordManager.getAllPasswordsGenerated(),
        }),
      );
    }
  });
}
