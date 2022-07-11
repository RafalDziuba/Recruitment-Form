<template>
  <div>
    <transition name="route" mode="out-in">
    <KeepAlive>
      <component
        :is="currentComponent"
        @next-step="changeComponent"
      ></component>
    </KeepAlive>
    </transition>
  </div>
</template>

<script>
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";

export default {
  components: { StepOne, StepTwo },
  data() {
    return {
      currentComponent: "StepOne",
    };
  },

  methods: {
    changeComponent() {
      this.currentComponent = "StepTwo";
    },
  },
};
</script>

<style lang="scss">
.register-form-wrapper {
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding-bottom: 10rem;

  .register-form-header,
  .register-form-header span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #343541;

    font-family: Eczar;
    font-size: 4rem;
    font-weight: 600;
    line-height: 4rem;
    text-align: center;

    span {
      color: grey;
    }
  }

  .register-form-header {
    margin-bottom: 3.5rem;
  }
  .register-form {
    width: 100%;

    .form-input {
      display: flex;
      flex-direction: column;
      width: 100%;

      margin-bottom: 2rem;

      label {
        font-family: Roboto Mono;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1.8rem;
        text-transform: uppercase;
        color: #f47073;
      }

      input {
        padding-top: 1.75rem;
        padding-bottom: 1.75rem;
        padding-left: 2.4rem;
        margin-top: 1rem;

        border: none;
        background: #f7f7f7;
        border-radius: 8px;

        font-family: Roboto;
        font-size: 1.8rem;
        font-weight: 400;
        color: grey;

        &:hover {
          background: #e5e5e5;
        }
        &:focus {
          box-sizing: border-box;
          background: rgba(47, 128, 237, 0.1);
          outline: 1px solid #2f80ed;
        }
      }

      .password-input {
        position: relative;

        input {
          width: 100%;
        }
      }

      i img {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translate(0, -30%);

        &:hover {
          cursor: pointer;
        }
      }

      .age-info {
        font-family: Roboto;
        font-size: 1.4rem;
        margin-top: 0.8rem;
      }
    }

    .form-password-hints {
      display: flex;
      flex-direction: column;

      margin-top: -1rem;
      span {
        font-family: Roboto;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }

    .form-buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .form-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 5.6rem;
        margin-top: 2.5rem;

        cursor: pointer;
        color: white;
        background: #ec1115;
        border: none;
        border-radius: 64px;

        font-family: Roboto Mono;
        font-size: 1.8rem;
        font-weight: 500;
        transition: background 0.2s;
        &:hover {
          background-color: #a60c0e;
        }
      }

      a {
        display: inline-block;
        margin-top: 2rem;

        font-family: Roboto Mono;
        font-size: 1.8rem;
        font-weight: 500;
        color: #ec1115;
        text-decoration: none;
      }
    }

    .checkbox-input {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        margin-top: 0;
        margin-right: 1rem;
      }

      label {
        font-size: 1.8rem;
        font-weight: 400;
        color: black;
        text-transform: none;

        label,
        a {
          font-family: Roboto;
          font-size: 1.8rem;
          font-weight: 400;
          color: black;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .register-form-wrapper {
    width: 62rem;
    align-items: flex-start;

    .register-form-header {
      justify-content: flex-start;
      align-items: flex-start;
    }

    .register-form-header,
    .register-form-header span {
      font-size: 8rem;
      line-height: 8rem;
      text-align: initial;
    }
    .register-form {
      padding: 6rem;
      padding-top: 7.5rem;
      box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
      border-radius: 24px;

      .form-buttons {
        flex-direction: row-reverse;
        justify-content: space-between;

        .form-button {
          width: 50%;
        }

        a {
          margin-left: 3rem;
        }
      }
    }
  }
}
</style>
