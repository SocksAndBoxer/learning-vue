const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "As I Lay Dying",
      author: "Faulkner",
      age: "64",
    };
  },
  methods: {
    changeTitle() {
      console.log("clicked");
      this.title = "Some title boiiii";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
