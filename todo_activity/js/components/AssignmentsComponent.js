import AssignmentListComponent from "./AssignmentListComponent.js";
import AssignmentFormComponent from "./AssignmentFormComponent.js";

export default{
    components : {AssignmentListComponent,AssignmentFormComponent},
    template : `
        <section class="flex gap-8"> 
            <assignment-list-component :assignments="filter.inProgress" title="In Progress">
                <assignment-form-component @add="add"></assignment-form-component>
            </assignment-list-component>

            <Transition>
                <assignment-list-component 
                    v-if="!isToggled" 
                    :assignments="filter.compeleted" 
                    title="Completed" 
                    can-toggle
                    @toggle="isToggled = ! isToggled"
                >
                </assignment-list-component>
            </Transition>
           
        </section>
    `,
data(){
    return {
        assignments : [],
        isToggled : false,
    }
},
created(){
    fetch('http://localhost:3001/assignments')
        .then(response => response.json())
        .then(data => {
            this.assignments = data;
        })
},
computed : {
    filter(){
        return {
            inProgress : this.assignments.filter(assignment =>! assignment.complete),
            compeleted : this.assignments.filter(assignment => assignment.complete),
        }
    }
},
methods: {
    add(name){
        this.assignments.unshift({
            name : name,
            complete : false,
            id : this.assignments.length + 1,
        });
    }
}
}