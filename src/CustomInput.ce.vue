<template>
  <div class="custom-input">
    <input v-bind="$attrs">
  </div>
</template>

<style lang="postcss">
:host {
  display: inline-block;
}

.custom-input {
  background-color: greenyellow;
  padding: 4px 8px;
}
</style>
