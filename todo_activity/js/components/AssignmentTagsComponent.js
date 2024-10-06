export default {
    template : `
        <div class="flex gap-2">
            <button 
            @click="$emit('update:currTag', tag)"
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            :class="
            {
                'bg-blue-600 text-white' :  tag == currTag
            }
            ">{{tag}}</button>
        </div>
    `,

    props :{
        initialTag : Array,
        currTag : String,
    },

    computed : {
        tags(){
            return ['all', ...new Set(this.initialTag)];
        },
    }
}