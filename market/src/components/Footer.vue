<template>
  <footer class="footer">
    <section>
      <router-link to="/contact-us">Join Our Community: </router-link>
      <a href="https://discord.gg/mH22gVxj">
        <img id="logo" src="../assets/discordLogo.png" alt="Join us on Discord" />
      </a>
    </section>

    <p>&copy; 2023 Marketplace. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  background-color: black;
  color: white;
  text-align: end;
  padding: 20px 0;
}

.footer p{
  margin-right: 1rem;
}

.footer a{
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
}

#logo{
  height: 2rem;
  width: 2rem;
}

section a{
  padding-left: 1rem;
}
</style>
