<template>
  <div id="main">

  </div>
</template>

<script>
var vm = new Vue({
  el: '#main',
  data: {
    active: 'HTML',
    items: [{
      name: 'HTML',
      active: true
    }, {
      name: 'CSS',
      active: false
    }, {
      name: 'JavaScript',
      active: 'false'
    }, {
      name: 'Vue.js',
      active: false
    }]
  },
  methods: {
    makeActive: function(item, index) {
      this.active = item.name;
      for (var i = 0; i < this.items.lenght; i++) {
        this.items[i].actgive = false;
      }
      this.items[index].active = true;
    }
  }
});
</script>
