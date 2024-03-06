<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          v-model="username"
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          v-model="pwd"
        />

        <div
          style="display: flex; justify-content: center; color: red"
          v-if="msg"
        >
          {{ msg }}
        </div>
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      username: "kminchelle" as String,
      pwd: "0lelplR" as String,
      msg: "" as String,
    };
  },
  methods: {
    onSubmit(): void {
      const payload = {
        username: this.username,
        password: this.pwd,
      };

      this.$store
        .dispatch("userLogin", payload)
        .then((res) => {
          if (res.status === 200) {
            this.msg = "Login Successfully";
          }
          console.log(JSON.parse(JSON.stringify(this.test)));
          console.log(this.$store.state.userInfo);
          this.$router.push("/about");
        })
        .catch((err) => {
          this.msg = err.message;
          console.log("err: ", err.message);
        });
    },
  },

  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
    test(): Object {
      return this.userInfo;
    },
  },
});
</script>

<style>
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
import { computed } from "@vue/reactivity";import { mapState } from
"vuex";import { userInfo } from "os";import { userInfo } from "os";import {
mapState } from "vuex";import { userInfo } from "os";import { stringify } from
"querystring";
