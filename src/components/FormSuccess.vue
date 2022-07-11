<template>
  <div>
    <h1>Good job {{ this.$store.getters.firstName }}!</h1>
    <p>
      We have sent you an email to
      <span>{{ this.$store.getters.email }}.</span>
    </p>
    <p>Make sure to click the link from message to activate your account.</p>
    <a href="/">Go to homepage</a>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p,
  span {
    font-family: Roboto;
    font-size: 1.8rem;

    text-align: center;

    span {
      font-weight: 700;
    }
  }
}

h1 {
  margin-bottom: 4rem;

  font-family: Eczar;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  width: 100%;
  height: 5.6rem;
  background: #ec1115;
  border-radius: 64px;
  font-family: Roboto Mono;
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  color: white;
}
@media (min-width: 1024px) {
  div {
    
    h1 {
      font-size: 8rem;
    }

    a {
      width: 23.5rem;
    }
  }
}
</style>
