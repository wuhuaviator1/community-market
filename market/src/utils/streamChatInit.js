import { StreamChat } from 'stream-chat';
import { auth } from '../firebase'; // 确保路径与你的文件结构匹配

async function initializeChat(user) {
  const client = new StreamChat('bux95t87x4ww');

  // 使用 Firebase 的 JWT token
  const token = await user.getIdToken();

  client.setUser({
    id: user.uid,
    name: user.displayName,
    image: user.photoURL
  }, token);

  return client;
}

export default initializeChat;
