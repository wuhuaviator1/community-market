<template>
  <nav class="navbar">
    <div class="brand-title">Marketplace</div>
    <div class="navbar-links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- 更多链接 -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar ul {
  list-style: none;
  display: flex;
}

.navbar li {
  padding: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}
</style>
