import AssignmentComponent from "./AssignmentComponent.js";
import AssignmentTagsComponent from "./AssignmentTagsComponent.js";
import Panel from "./Panel.js";

export default {
    template : `
        <panel v-show="assignments.length" theme="dark" >

            <template #header>
                <div class="flex justify-between items-start">
                    <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ assignments.length }})</span>
                    </h2>

                    <button v-show="canToggle" v-on:click="$emit('toggle')">&times;</button>
                </div>

                <assignment-tags-component 
                    v-model:currTag="currTag"
                    :initial-tag="assignments.map(item => item.tag)"
                >
                </assignment-tags-component>
            </template>

            <template #content>
                <TransitionGroup name="list" tag="ul" class="border border-gray-600 divide-y divide-gray-600 mt-6">
                    <assignment-component 
                        v-for="assignment in filteredAssignments"
                        :key="assignment.id"
                        :assignment="assignment"
                    ></assignment-component>
                </TransitionGroup>
            </template>

            

            <slot></slot>
        </panel>
    `,
    components : {AssignmentComponent, AssignmentTagsComponent,Panel},

    data(){
        return {
            currTag : 'all',
        }
    },
    props : {
        title : String,
        assignments : Array,
        canToggle : {
            type : Boolean,
            default : false,
        }
    },

    computed :{
        filteredAssignments(){
            if(this.currTag == 'all'){return this.assignments}
            return this.assignments.filter(item => item.tag === this.currTag);
        }
    }
}