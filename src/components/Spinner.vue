<template>
  <div>
    <v-progress-circular
      v-if="true"
      :size="100"
      :width="7"
      color="green"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      v-if="false"
      :size="100"
      color="red"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
