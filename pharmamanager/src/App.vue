<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/search" class="nav-link">Pharmarcy Seach Engine</router-link>

        </li>
      </ul>
    </nav><br />
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>


<style>
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
  .fade-enter, .fade-leave-active {
      opacity: 0
    }

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.9, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>

    export default{
    }
</script>
