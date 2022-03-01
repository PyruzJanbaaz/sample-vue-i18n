<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" class="nav-link">
                About Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Contact' }" class="nav-link">
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <div class="container">
      <p>{{ $t('message') }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

