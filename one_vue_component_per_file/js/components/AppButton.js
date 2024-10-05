export default {
    props : {
        type : {
            type : String,
            default : 'primary',
        },
        processing : {
            type : Boolean,
            default:  false,
        },
    },
    template : `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed' : true,
                'bg-gray-200 hover:bg-gray-400' : type === 'muted',
                'bg-blue-600 hover:bg-blue-700' : type === 'primary',
                'bg-green-200 hover:bg-green-400' : type === 'secondary',
                'is-loading' : processing,
            }" 
            :disabled="processing"
        >
            <slot />
        </button>
    `,
    mounted() {
    }
}