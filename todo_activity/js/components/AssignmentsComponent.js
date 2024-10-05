import AssignmentListComponent from "./AssignmentListComponent.js";

export default{
    components : {AssignmentListComponent},
    template : `
    <assignment-list-component :assignments="filter.inProgress" title="In Progress"></assignment-list-component>
    <assignment-list-component :assignments="filter.compeleted" title="Completed"></assignment-list-component>
    `,
data(){
    return {
        assignments : [
            {name : 'Finish Project', complete : false, id : 1},
            {name : 'Read Chapter 4', complete : false, id : 2},
            {name : 'Turn in homework', complete : false, id : 3},
        ]
    }
},
computed : {
    filter(){
        return {
            inProgress : this.assignments.filter(assignment =>! assignment.complete),
            compeleted : this.assignments.filter(assignment => assignment.complete),
        }
    }
},
}