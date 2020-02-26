<template>
  <div>
    <el-row>
      <el-col :span="22">
          <span>按拼音首字母选择：</span>
        <span class="grid-content bg-purple-dark">
                <template v-for="(item) in title">
                    <a :key="item" :href="`#${item}`">{{ item }}</a>
                </template>
        </span>
      </el-col>
    </el-row>
    <template v-for="(item) in title">
      <dl :key="`${item}_1`">
        <dt :id="`${item}`">{{item}}</dt>
        <template v-for="itema in content">
          <template v-if="itema.firstChar == item">
            <dd :key="itema.name">{{ itema.name}}</dd>
          </template>
        </template>
      </dl>
    </template>
  </div>
</template>

<script>
export default {
  props: ["title", "content"]
};
</script>

<style>
</style>