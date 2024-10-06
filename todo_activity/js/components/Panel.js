export default {
    template : `
        <div 
            :class="{
                'mt-8 p-4 rounded-lg w-72' : true,
                'bg-white border-gray-300 text-black' : theme == 'light',
                'bg-gray-700 border-gray-600' : theme == 'dark',
            }"
        >

        <div>
            <slot name="header"/>
        </div>

        <div>
            <slot name="content"/>
        </div>

        </div>
    `,

    props : {
        theme : {
            type: String,
            default : 'dark',
        }
    }
}