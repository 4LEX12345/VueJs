import AssignmentComponent from "./AssignmentComponent.js"

export default {
    components : {AssignmentComponent},
    props : {
        title : String,
        assignments : Array,
    },

    template : `
        <section v-show="assignments.length" class="mt-8">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>    
                <assignment-component 
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment-component>
            </ul>
        </section>
    `
}