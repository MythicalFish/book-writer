<template>
  <el-table
    :data="list"
    stripe
    style="width: 100%">
    <el-table-column
      label="Title">
      <template slot-scope="scope">
        <el-form v-if="UI(['renaming', scope.row.id])" ref="form" :model="scope.row" @submit.prevent.native="update">
          <el-input autofocus v-model="scope.row.title"></el-input>
        </el-form>
        <div v-else>
          <router-link :to="{name:'edit', params: { id: scope.row.id }}">{{scope.row.title}}</router-link>
        </div>
      </template>
    </el-table-column>
    <el-table-column width="150">
      <template slot-scope="scope">
        <template v-if="UI(['renaming', scope.row.id])">
          <el-button icon="el-icon-check" size="mini" v-on:click="update"></el-button>
        </template>
        <template v-else>
          <el-button icon="el-icon-edit" size="mini" v-on:click="toggleUI(['renaming',scope.row.id])"></el-button>
          <el-button icon="el-icon-delete" size="mini" v-on:click="destroy(scope.row.id)"></el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('document')
export default {
  props: ['list', 'toggleUI', 'UI', 'update', 'destroy']
}
</script>
