Vue.component('nameselector', {
    data: function () {
        return {
            name: '',            
        }
    },
    props: ['distinctNames'],
    template: `<div>Velg person: <select v-model="name">
               <option v-for="name of distinctNames">{{ name }}</option>
               </select></div>`
})