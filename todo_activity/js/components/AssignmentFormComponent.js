export default{
    template : `
        <form @submit.prevent="add" >
            <div class="text-black border border-gray-600 flex">
                <input type="text" placeholder="New Assignment..." class="p-2" v-model="newAssignment">
                <button type="submit"  class="p-2 border-l bg-white">Add</button>
            </div>
        </form>
    `,

    data(){
        return {
            newAssignment : '',
        }
    },

    methods : {
        add(){
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}