<template>
  <div class="home">
    <div class="container">
      <h1 class="assign">任务追踪</h1>
      <p class="createAssign">
        <strong>
          <router-link to="/time-entries">创建一个任务</router-link>
        </strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  width: 100%;
}
.container {
  background-color: #eeeeee;
  height: 235px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 6px;
}
.assign {
  font-size: 64px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  margin-left: 50px;
  margin-top: 70px;
}
p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
  margin: 0 0 10px;
}
strong {
  font-weight: bold;
}
.createAssign {
  margin-left: 50px;
  color: #337ab7;
  text-decoration: none;
}
</style>
