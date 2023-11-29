<template>
  <div class="chat-window" :class="{ minimized: isMinimized }">
    <button @click="toggleMinimize">{{ isMinimized ? 'Expand' : 'Minimize' }}</button>
    <div v-show="!isMinimized" class="messages">
      <!-- 消息和输入区域 -->
      <div v-for="message in messages" :key="message.id">
        <strong>{{ message.user.name }}:</strong> {{ message.text }}
      </div>
    </div>
    <textarea class="message-input" v-show="!isMinimized" v-model="newMessage" @keyup.enter="sendMessage"></textarea>
    <button v-show="!isMinimized" @click="sendMessage">Send</button>
  </div>
</template>

  

<script>
import { auth } from '../firebase'; 
import initializeChat from '../utils/streamChatInit'; // 调整路径以匹配你的文件结构

export default {
  name: 'ChatWindow',
  props: ['sellerId'],
  data() {
    return {
      chatClient: null,
      channel: null,
      newMessage: '',
      isMinimized: false,
      messages: []
    };
  },
  methods: {
    async initializeChat() {
      const currentUser = auth.currentUser;
      this.chatClient = await initializeChat(currentUser);

      const channelId = `chat-${currentUser.uid}-${this.sellerId}`;
      this.channel = this.chatClient.channel('messaging', channelId);

      await this.channel.watch();
      this.loadMessages();
    },
    loadMessages() {
      this.channel.on('message.new', event => {
        this.messages.push(event.message);
      });

      this.channel.queryMessages({ limit: 20 }).then((messages) => {
        this.messages = messages.messages;
      });
    },
    sendMessage() {
      if (this.newMessage.trim()) {
          this.channel.sendMessage({ text: this.newMessage });
          this.newMessage = '';
        }
    },
    toggleMinimize() {
      this.isMinimized = !this.isMinimized;
    }
  },
  created() {
    this.initializeChat();
  }
};
</script>

  
  <style scoped>
.chat-window {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 400px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.minimized {
  width: 6rem;
  height: 3rem;
  overflow: hidden;
  cursor: pointer;
}

.message-input {
  width: 100%; /* 设置输入区域的宽度 */
  height: 18rem; /* 初始高度 */
  resize: none; /* 禁止用户调整大小 */
  border: 1px solid #ccc;
  padding: 5px;
  box-sizing: border-box; /* 确保内边距和边框不会增加宽度 */
  overflow-y: auto; /* 超过高度时出现滚动条 */
}

</style>