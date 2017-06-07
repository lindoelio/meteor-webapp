<template>

  <nav class="nav has-shadow nav-fixed">
    <div class="container">
      <div class="nav-left" style="margin-left: -12px">
        <a class="nav-item">
          <img src="/img/tigela-logo-horizontal.png" alt="Logo">
        </a>
      </div>

      <div class="nav-center"></div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu" style="margin-right: -12px;">
        <router-link class="nav-item is-tab is-active" :to="{ name:'home' }" exact>
          <i class="fa fa-home"></i>
        </router-link>
        <div class="nav-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Cadastrar</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<style scoped>
  .nav-fixed {
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
  }
</style>
