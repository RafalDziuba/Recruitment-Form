<template>
  <nav>
    <img src="@/assets/logo.svg" alt="montecinema logo" />
    <p>
      developed with <img src="@/assets/heart.svg" alt="heart icon" /> by
      monterail
    </p>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.8rem;
  p {
    display: none;
  }
}

@media (min-width: 1024px) {
  nav {
    justify-content: space-between;
    padding: 0 4.8rem;

    p {
display: block;

      font-family: Roboto Mono;
      font-weight: 500;
      font-size: 1.6rem;
      text-transform: uppercase;

      img {
        width: 1.4rem;
      }
    }
  }
}
</style>
