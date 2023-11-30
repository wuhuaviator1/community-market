<template>
  <div>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item._id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    const response = await fetch("http://localhost:3001/api/users");
    if (response.ok) {
      this.data = await response.json();
      // console.log(this.data);
      // console.log(1);
    }
  },
};
</script>
