<template>
  <header class="header-container pa-3">
    <nav class="navbar">
      <RouterLink to="/"><img src="../../assets/images/to_do_logo.png" alt="TODO logo" class="logo"></RouterLink>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact-us">Contact Us</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About Us</RouterLink>
        </li>
      </ul>


    </nav>
  </header>


</template>

<script src="./header.js"></script>

<style scoped>
.header-container {
  background-color: #f8f9fa;
}

.navbar {
  display: flex;
  align-items: center;
}

.navbar ul li {
  list-style: none;
  display: inline-block;
  margin: 0 5px;
  padding: 3px 5px;
  font-size: 20px;
}

.navbar ul li a {
  text-decoration: none;
  color: #1e1e1e;
}

.navbar ul li:hover {
  background-color: rgb(232, 232, 232);
  border-radius: 8px;
  color: #000000;
}

.logo {
  width: 80px;
  margin-right: 20px;
}
</style>