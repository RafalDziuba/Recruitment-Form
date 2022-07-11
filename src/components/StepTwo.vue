<template>
  <div class="register-form-wrapper">
    <h1 class="register-form-header">Great!<span>Now your name</span></h1>
    <form @submit.prevent="submit()" class="register-form">
      <div class="form-input">
        <label for="first-name">first name</label>
        <input
          v-model="firstName"
          type="text"
          name="first-name"
          id="first-name"
          placeholder="e.g. Jessica"
          required
        />
      </div>
      <div class="form-input">
        <label for="last-name">last name</label>
        <input
          v-model="surName"
          type="text"
          name="last-name"
          id="last-name"
          placeholder="e.g. Walton"
          required
        />
      </div>
      <div class="form-input">
        <label for="birthday">date of birth</label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          v-model="age"
          required
          @input="getUserAge"
        />
        <span class="age-info">You should be minimum 18 years old</span>
      </div>
      <div class="form-input checkbox-input">
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          @click="this.checked = !this.checked"
          required
        />
        <label for="privacy">I accept <a href="#">Privacy Policy</a></label>
      </div>

      <div class="form-buttons">
        <button
          @click="
            clickEffect();
            submit();
          "
          :class="isClicked ? 'btn-click-effect' : ''"
          class="form-button"
          type="submit"
        >
          Register
        </button>

        <a href="#">Log in instead</a>
      </div>
    </form>
    <p class="step-error" v-if="isAdult === false">You should be more than 18!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
      checked: false,
      isAdult: null,
    };
  },
  computed: {
    firstName: {
      get() {
        return this.$store.getters.firstName;
      },
      set(value) {
        this.$store.commit("updateFirstName", value);
      },
    },
    surName: {
      get() {
        return this.$store.getters.surName;
      },
      set(value) {
        this.$store.commit("updateSurName", value);
      },
    },
    age: {
      get() {
        return this.$store.getters.age;
      },
      set(value) {
        this.$store.commit("updateAge", value);
      },
    },
  },
  methods: {
    clickEffect() {
      this.isClicked = !this.isClicked;
      setTimeout(() => {
        this.isClicked = !this.isClicked;
      }, 200);
    },

    getUserAge() {
      let userAge = new Date(this.$store.getters.age);
      let monthDiff = Date.now() - userAge.getTime();
      let ageDate = new Date(monthDiff);
      let year = ageDate.getUTCFullYear();
      let fullAge = Math.abs(year - 1970);
      if (fullAge < 18) {
        this.isAdult = false;
      } else {
        this.isAdult = true;
      }
    },

    submit() {
      //normally i would dispatch action with form data payload and send this payload to backend
      //required not working because of router push
      if (
        this.$store.getters.firstName.trim().length == 0 ||
        this.$store.getters.surName.trim().length == 0 ||
        this.$store.getters.age === 0 ||
        this.isAdult === false ||
        this.checked === false
      ) {
        return;
      } else {
        this.$router.push({ path: "/success" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-click-effect {
  border: 5px solid #f47073 !important;
}

.step-error {
  color: red;
  font-size: 2rem;
}
</style>
