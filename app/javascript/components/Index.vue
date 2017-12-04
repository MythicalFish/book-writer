<template>
  <div id="index" class="container">
    <el-button type="primary" v-on:click='showformNew' v-if="!newDoc.showForm">New document</el-button>
    <div v-if="newDoc.showForm">
      <el-form ref="newDoc.formData" :model="newDoc.formData">
        <el-form-item label="Document title">
          <el-input v-model="newDoc.formData.title"></el-input>
          <el-button v-on:click="create" :loading="newDoc.isLoading">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-for="doc in index" :key="doc.id">
      <el-row class="asd">
        <el-col :span="20">
          <div v-if="editing(doc.id)">
            <el-input></el-input>
          </div>
          <div v-else>
            <router-link :to="{name:'edit', params: { id: doc.id }}">{{doc.title}}</router-link>
          </div>
        </el-col>
        <el-col :span="4">
          <el-button icon="el-icon-edit" size="mini" v-on:click="showformEdit(doc.id)"></el-button>
          <el-button icon="el-icon-delete" size="mini" v-on:click="destroy(doc.id)"></el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  computed: {
    ...mapState({
      index: state => state.index,
      newDoc: state => state.new
    }),
    ...mapGetters(['editing'])
  },
  methods: {
    ...mapActions([
      'hideformNew',
      'showformNew',
      'showformEdit',
      'hideformEdit',
      'fetchList',
      'create',
      'destroy'
    ])
  },
  created() {
    this.fetchList()
  }
}
</script>
