<template>
  <footer>
    <RouterLink to="mention-legales">Mentions légales</RouterLink>
  </footer>
</template>

<style scoped>
footer {
  background: aliceblue;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: inherit;
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
}
</style>
