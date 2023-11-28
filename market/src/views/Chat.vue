<template>
  <div class="chat-page">
    <!-- Top Navigation Bar -->
    <header class="top-nav">
      <!-- Navigation content (can be replaced or expanded) -->
      <h1>聊天室</h1>
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
        <input v-model="newMessage" type="text" placeholder="输入消息...">
        <button @click="sendMessage">发送</button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <!-- Footer content -->
      <p>版权所有 &copy; 2023</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ChatPage',
  data() {
    return {
      newMessage: '',
      messages: [
        { id: 1, sender: '买家', text: '您好！我对这个商品感兴趣。' },
        { id: 2, sender: '卖家', text: '您好！有什么可以帮助您的吗？' },
        // 更多消息...
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        // 添加新消息到 messages 数组
        this.messages.push({
          id: this.messages.length + 1,
          sender: '用户', // 修改为当前用户的身份
          text: this.newMessage,
        });
        this.newMessage = ''; // 清空输入框
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
