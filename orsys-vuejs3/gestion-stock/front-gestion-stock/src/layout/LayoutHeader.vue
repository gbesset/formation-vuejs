<template>
  <header>
    <RouterLink to="/"><img src="/cart.svg" alt="Logo" /><span>Gestion Stock</span></RouterLink>
  </header>
</template>

<style scoped>
img {
  width: 30px;
}
header {
  height: 130px;
  background: aliceblue;
  height: 3rem;
  display: flex;
  align-items: center;
}
span {
  font-weight: bold;
  padding: 0 0.5rem;
  font-size: 1.3rem;
}
a {
  display: flex;
  align-items: center;
  text-decoration: inherit;
  color: black;
  gap: 0.5rem;
}

a:hover {
  text-decoration: underline;
}
</style>
