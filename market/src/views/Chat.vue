<template>
  <div class="chat-page">
    <!-- Top Navigation Bar -->
    <header class="top-nav">
      <!-- Navigation content (can be replaced or expanded) -->
      <h1>Chatting Room</h1>
    </header>

    <!-- Main Content Section -->
    <main class="main-content">
      <!-- Chat container -->
      <section class="chat-container">
        <ul class="messages-list">
          <li class="message" v-for="message in messages" :key="message.id">
            <strong>{{ message.sender }}:</strong> {{ message.text }}
          </li>
        </ul>
      </section>

      <!-- Message Input -->
      <div class="message-input">
        <input v-model="newMessage" type="text" placeholder="More messages...">
        <button @click="sendMessage">send</button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <!-- Footer content -->
      <p>Copyright &copy; 2023</p>
    </footer>
  </div>
</template>

<script>
import { auth, database } from '../firebase'; // 导入 auth 和 database 实例
import { ref, onChildAdded, push, serverTimestamp } from 'firebase/database';

export default {
  name: 'ChatPage',
  data() {
    return {
      newMessage: '',
      messages: [],
    };
  },
  mounted() {
    const messagesRef = ref(database, 'messages');
    onChildAdded(messagesRef, (snapshot) => {
      const message = snapshot.val();
      this.messages.push(message);
    });
  },
  methods: {
    getCurrentUserId() {
      // 获取当前登录用户的 ID
      return auth.currentUser ? auth.currentUser.uid : null;
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const userId = this.getCurrentUserId(); // 获取当前用户 ID
        if (userId) {
          const messageRef = ref(database, 'messages');
          push(messageRef, {
            sender: userId, // 使用当前用户的 ID 作为 sender
            text: this.newMessage,
            timestamp: serverTimestamp() // 使用 Firebase 服务器时间戳
          });
          this.newMessage = '';
        } else {
          console.error('用户未登录，无法发送消息');
          // 处理用户未登录的情况
        }
      }
    },
  },
};
</script>




<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top-nav {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.chat-container {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #f5f5f5;
}

.messages-list {
  list-style: none;
  padding: 0;
}

.message {
  margin-bottom: 10px;
}

.message-input {
  display: flex;
  padding: 10px;
  background-color: #fff;
}

.message-input input {
  flex-grow: 1;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
}

.message-input button {
  padding: 5px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.message-input button:hover {
  background-color: #45a049;
}

.footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
}
</style>
