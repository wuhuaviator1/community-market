<template>
  <div>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item._id">{{ item.firstName }}</li>
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
    const response = await fetch(
      "http://localhost:3001/api/users/profile/testId2"
    );
    if (response.ok) {
      this.data = await response.json();
      // console.log(this.data);
      // console.log(1);
    }
  },
};
</script>
