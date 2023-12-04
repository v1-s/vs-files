import axios from "axios";
import React from "react";
class Lfhome extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    data:[]
                }
                this.handleDelete=this.handleDelete.bind(this);
            }
           
            componentDidMount(){
            let Url='https://dummyjson.com/todos';
            axios.get(Url).then(response =>{
                this.setState({
                    data:response.data.todos
                })
                console.log('response Data',response.data.todos);
            }).catch(error=>{
                console.log(error);
            })
            }
            handleDelete(delitem){
                let Deldata=this.state.data.filter(dataItem => dataItem !== delitem)
                this.setState({data:Deldata})
                console.log('delete',delitem)
            }
            render(){
                return(
                    <>
                    {
                        <table>
                            <tr>
                                <th>id</th>
                                <th>todo</th>
                            </tr>
                            {
                                this.state.data.map(item=>{
                                    return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.todo}</td>
                                        <td><button onClick={() => this.handleDelete(item)}>Delete</button></td>
                                    </tr>
                                    )
                                })
                            }
                        </table>
                    }
                    </>
                )
            }
}

export default Lfhome;