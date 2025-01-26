import { broadcast, broadcastAttPasswords } from './broadcast';
import { WebSocket, WebSocketServer } from 'ws';
import { passwordManager } from '../manager/passwordManager';

export const handleMessage: Record<
  string,
  (payload: any, ws: WebSocket, wss: WebSocketServer) => void
> = {
  generatePassword: (payload, ws, wss) => {
    console.log('Gerando senha');
    const newPassword = passwordManager.generatePasswordSolo();
    console.log(newPassword);
    broadcastAttPasswords(wss);
  },
  callNextPassword: (payload, ws, wss) => {
    console.log('Chamando próxima senha');
    passwordManager.callNextPassword(payload.guiche);
    broadcastAttPasswords(wss);
  },
  excludeAllPasswords: (payload, ws, wss) => {
    console.log('Chamando próxima senha');
    passwordManager.excludeAllPasswords();
    broadcastAttPasswords(wss);
  },
  excludeAllData: (payload, ws, wss) => {
    console.log('Chamando próxima senha');
    passwordManager.excludeAllData();
    broadcastAttPasswords(wss);
  },
  ping: (_, ws, wss) => {
    ws.send(JSON.stringify({ type: 'pong' }));
  },
};
