const app = Vue.createApp({
  data() {
    return { 
      addGoalValue: '',
      goals: [],
      goalsObj: {
        goal: 'Complete Vue course',
        priority: 'High',
      } 
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
