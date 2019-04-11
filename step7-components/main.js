// let app = new Vue({
//   el: '#root',
//   data: {
//     tasks: [
//       { description: 'do laundry', completed: true },
//       { description: 'wash dishes', completed: false },
//       { description: 'sell car', completed: false },
//       { description: 'run 5k', completed: false },
//       { description: 'do laundry', completed: false },
//       { description: 'write thank you card', completed: false },
//       { description: 'book dinner', completed: true },
//     ],
//
//   },
//   methods: {
//     toggleCompleted(task) {
//       task.completed = !task.completed;
//     }
//   },
//   computed: {
//     incompleteTasks() {
//       return this.tasks.filter(task => !task.completed);
//     },
//     completedTasks() {
//       return this.tasks.filter(task => task.completed);
//     }
//   }
// });

Vue.component('task', {
  // template: '<li></li>',
  template: '<li><slot></slot></li>',
  data() {
    return { message: 'test' }
  },
});

new Vue({
  el: '#root',
})
