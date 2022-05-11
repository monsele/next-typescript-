import { resourceLimits } from "worker_threads"

interface IResult{
id:string;
taskname:string;
description:string;
assigned:string;
assignee:string;
done:boolean;
team?:string;
}
 const results:IResult[]=[
    {
        id:'1',
        taskname:"Create A list of task",
        assigned:"Sele",
        assignee:"Goals",
        description:"This task should display a list of cards with the task info on them",
        done:false,
        team:"Team 1",
    },
    {
        id:"2",
        taskname:"Create A Form Page",
        assigned:"Sele",
        assignee:"Goals",
        description:"This task should create a form for adding new tasks",
        done:false,
        team:"Team 1",
    },
    {
        id:"3",
        taskname:"Create a view task page",
        assigned:"Sele",
        assignee:"Goals",
        description:"This task should create a page where more details of the view",
        done:false,
        team:"Team 1",
    },
    {
        id:'4',
        taskname:"Connect to the database",
        assigned:"Sele",
        assignee:"Goals",
        description:"This task should allow you to connect to the database",
        done:false,
        team:"Team 1",
    },
    {
        id:'5',
        taskname:"Put a Create Link on the navbar",
        assigned:"Sele",
        assignee:"Goals",
        description:"A link should be created to go to the create task page",
        done:false,
        team:"Team 1",
    },
    
 ];


 export default results;
