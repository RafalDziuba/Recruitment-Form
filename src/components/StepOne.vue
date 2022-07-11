<template>
  <div class="register-form-wrapper">
    <h1 class="register-form-header">
      Ahoy you!<span>Care to register?</span>
    </h1>
    <form class="register-form">
      <div class="form-input">
        <label for="email">email</label>
        <input
          type="text"
          v-model="email"
          name="email"
          id="email"
          placeholder="Something ending with..."
          required
        />
      </div>
      <div class="form-input">
        <label for="password">password</label>
        <div class="password-input">
          <input
            :type="passwordVisible ? 'text' : 'password'"
            v-model="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <i>
            <img
              @click="changePasswordVision"
              src="@/assets/eye.svg"
              alt="show password icon"
          /></i>
        </div>
      </div>

      <div class="form-password-hints">
        <span :class="lengthValid">At least 8 characters</span>
        <span :class="letterValid">At least one letter</span>
        <span :class="numberValid">At least one digit</span>
      </div>

      <div class="form-buttons">
        <button
          @click.prevent="
            clickEffect();
            goNext();
          "
          :class="isClicked ? 'btn-click-effect' : ''"
          class="form-button"
        >
          Next step
        </button>
        <a href="#">Log in instead</a>
      </div>
      <p class="step-error" v-if="canGoToNext === false">
        Fill in all fields to go next!
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
      passwordVisible: false,
      canGoToNext: null,
    };
  },
  methods: {
    clickEffect() {
      this.isClicked = !this.isClicked;
      setTimeout(() => {
        this.isClicked = !this.isClicked;
      }, 200);
    },

    changePasswordVision() {
      this.passwordVisible = !this.passwordVisible;
    },

    goNext() {
      if (
        this.lengthValid === false ||
        this.letterValid === false ||
        this.numberValid === false ||
        this.$store.getters.email.trim().length < 3
      ) {
        this.canGoToNext = false;
      } else {
        this.$emit("nextStep");
      }
    },
  },

  computed: {
    password: {
      get() {
        return this.$store.getters.password;
      },
      set(value) {
        this.$store.commit("updatePassword", value);
      },
    },
    email: {
      get() {
        return this.$store.getters.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      },
    },
    lengthValid() {
      if (this.$store.getters.password.trim().length == 0) {
        return;
      } else if (this.$store.getters.password.trim().length < 8) {
        return "invalid";
      } else {
        return "valid";
      }
    },

    letterValid() {
      if (this.$store.getters.password.trim().length == 0) {
        return;
      } else if (/[a-zA-Z]/.test(this.$store.getters.password)) {
        return "valid";
      } else {
        return "invalid";
      }
    },
    numberValid() {
      if (this.$store.getters.password.trim().length == 0) {
        return;
      } else if (/[0-9]/.test(this.$store.getters.password)) {
        return "valid";
      } else {
        return "invalid";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-click-effect {
  border: 5px solid #f47073 !important;
}

.valid {
  color: green;
}

.invalid {
  color: red;
}

.step-error {
  color: red;
  font-size: 2rem;
}
</style>
