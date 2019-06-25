<template>
  <div>
    <div class="content">
      <div class="up">
        <h1 class="hasTime">已有时长</h1>
      </div>
      <div class="down">
        <h1 class="hasTime">{{time}}小时</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    time(){
      return this.$store.state.totalTime
    }
  },
};
</script>

<style scoped>
.content {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.up {
  color: #333333;
  background-color: #f5f5f5;
  border-color: #ddd;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.up .hasTime {
  text-align: center;
}
.down{
  padding: 15px;
}
.down .hasTime{
  text-align: center;
}
</style>
