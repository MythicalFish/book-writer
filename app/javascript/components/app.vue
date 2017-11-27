<template>
  <div id="app">
    <p>{{ message }}</p>
    <el-button type="primary" v-on:click='isCreating = !isCreating'>New document</el-button>
    <div v-show="isCreating">
      <el-form ref="form" :model="form">
        <el-form-item label="Document name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'Hello Vue!',
      isCreating: false,
      form: {
        name: ''
      }
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
