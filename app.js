const app = Vue.createApp({
  data() {
    return { 
      addGoalValue: '',
      goals: [] 
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.addGoalValue);
      this.addGoalValue = '';
    }
  }
});

app.mount('#user-goals');
