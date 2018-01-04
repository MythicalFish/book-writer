<template>
  <el-table
    :data="list"
    stripe
    style="width: 100%">
    <el-table-column
      label="Title">
      <template slot-scope="scope">
        <el-form v-if="isEditing(scope.row.id)" ref="form" :model="editing" @submit.prevent.native="update">
          <el-input autofocus v-model="editing.title"></el-input>
        </el-form>
        <div v-else>
          <router-link :to="{name:'edit', params: { id: scope.row.id }}">{{scope.row.title}}</router-link>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="150">
      <template slot-scope="scope">
        <template v-if="isEditing(scope.row.id)">
          <el-button v-if="isEditing(scope.row.id)" icon="el-icon-check" size="mini" v-on:click="update"></el-button>
        </template>
        <template v-else>
          <el-button icon="el-icon-edit" size="mini" v-on:click="showformEdit(scope.row)"></el-button>
          <el-button icon="el-icon-delete" size="mini" v-on:click="destroy(scope.row)"></el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  props: ['list'],
  computed: {
    ...mapState({
      editing: state => state.editing
    }),
    ...mapGetters(['isEditing'])
  },
  methods: {
    ...mapActions(['update', 'destroy', 'showformEdit'])
  }
}
</script>
