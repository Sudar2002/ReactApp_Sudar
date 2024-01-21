import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

export default function Admin(){
    const [users,setUsers]=useState([]);
    const [show,setShow]=useState('');

useEffect(()=>{


    const Code={code:20021117};
    axios.post('http://localhost:8000/admin',Code).then((res)=>{
        console.log(res.data)
               setUsers(res.data)
               if(!res.data[0]){
                setShow(false);
            }
            else{
                setShow(true);
            }
    })

},[])

console.log(users)


    return(
        <Container>
           

            <h1 className="text-warning text-center fw-bold text-decoration-underline">SDR Admin Panel</h1>
           
        <Table  striped bordered hover>
            <thead>
                <tr>
                  
                <th className="text-primary text-center">user ID</th>
                <th className="text-primary text-center ">user name</th>
                <th className="text-primary text-center">user email</th>
                <th className="text-primary text-center">user password</th>
               
                </tr>
            </thead>
            {show? 
            <tbody>
           
               {users.map((user)=>{
                return <tr>
                <td>{user.user_id}</td>
                <td>{user.user_name}</td>
                <td>{user.user_email}</td>
                <td>{user.user_password}</td>
                </tr>
                })}
            </tbody>:<tbody><tr><td colSpan={5} className="text-danger">No Users Found!</td></tr></tbody>}
            </Table>

            
        </Container>
    )
}