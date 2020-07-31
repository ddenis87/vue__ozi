<template>
  <div class="">
    <list-select selectWidth='300' selectFunction="getSelectDistrict"></list-select>
    <list-select selectWidth='300' selectFunction="getSelectDepartment"></list-select>
    <list-select selectWidth='300' selectFunction="getSelectPost"></list-select>
  </div>
</template>

<script>
import ListSelect from '@/components/list-select';

export default {
  name: "Main",
  components: {
    ListSelect,
  }
}
</script>

<style lang="scss" scoped>

</style>