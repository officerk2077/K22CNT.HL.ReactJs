import React, {useState} from 'react'
import NtkFormStudent from './NtkFormStudent';

export default function NtkListStudent() {
    // mock data
    const studentsInit = [
        { id: 1, name: "Nguyễn Trực Kiên", age: 21 },
        { id: 2, name: "Dương Thị Hà My", age: 20 },
        { id: 3, name: "Nguyễn Văn F", age: 21 },
        { id: 4, name: "Trần Thị G", age: 23 },
        { id: 5, name: "Đặng Văn H", age: 20 }
    ];
    // state
    const [students, setStudent] = useState(studentsInit)

    // add
    const handleSubmit = (param) => {
        console.log("param:",param);

        const newStudents = [...students, param];
        setStudent(newStudents)
        
    }
  return (
    <div>
        <h2>DANH SÁCH SINH VIÊN</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((stud, index)=>{
                        return (
                            <tr>
                                <td>{stud.id}</td>
                                <td>{stud.name}</td>
                                <td>{stud.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <NtkFormStudent onSubmit={handleSubmit}/>
    </div>
  )
}
