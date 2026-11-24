import { useEffect, useState } from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

function TabUsers() {

    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [editingT, setEditingT] = useState("");
    const [editingS, setEditingS] = useState("");
    const [teacherModal, setTeacherModal] = useState(false);
    const [teacherEditModal, setTeacherEditModal] = useState(false);
    const [studentModal, setStudentModal] = useState(false);
    const [studentEditModal, setStudentEditModal] = useState(false);

    console.log(teachers);

    useEffect(() => {
        async function fetchTeachers() {
            try {
                let res = await fetch("https://6a26c767a84f9d39e907e1b6.mockapi.io/teachers");
                let data = await res.json();
                setTeachers(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchTeachers();
    }, []);

    console.log(students);

    useEffect(() => {
        async function fetchStudents() {
            try {
                let res = await fetch("https://6a26c767a84f9d39e907e1b6.mockapi.io/students");
                let data = await res.json();
                setStudents(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchStudents();
    }, []);

    async function handleDeleteTeacher(id) {
        try {
            const res = await fetch(`https://6a26c767a84f9d39e907e1b6.mockapi.io/teachers/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error(`Failed to delete teacher: ${res.status}`);
            }
            setTeachers((currentTeachers) => currentTeachers.filter((teacher) => teacher.id !== id));
        } catch (err) {
            console.error(err);
        }
    }

    async function handleDeleteStudent(id, teacherId) {
        try {
            const res = await fetch(`https://6a26c767a84f9d39e907e1b6.mockapi.io/teachers/${teacherId}/students/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error(`Failed to delete student: ${res.status}`);
            }
            setStudents((currentStudents) => currentStudents.filter((student) => student.id !== id));
        } catch (err) {
            console.error(err);
        }
    }

    async function addTeacher(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const teacherObj = {
            teacherName: formData.get("teacherName"),
            avatar: formData.get("avatar"),
            email: formData.get("email"),
            experience: formData.get("experience"),
            phoneNumber: formData.get("phoneNumber"),
            subject: formData.get("subject"),
            salary: formData.get("salary"),
        };
        try {
            const res = await fetch("https://6a26c767a84f9d39e907e1b6.mockapi.io/teachers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(teacherObj)
            });
            if (!res.ok) {
                throw new Error(`Failed to add teacher: ${res.status}`);
            }
            const createdTeacher = await res.json();
            setTeachers((currentTeachers) => [...currentTeachers, createdTeacher]);
            setTeacherModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    const editingTeacher = teachers.find((teacher) => teacher.id === editingT);

    async function editTeacher(e) {  
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const teacherObj = {
            teacherName: formData.get("teacherName"),
            avatar: formData.get("avatar"),
            email: formData.get("email"),
            experience: formData.get("experience"),
            phoneNumber: formData.get("phoneNumber"),
            subject: formData.get("subject"),
            salary: formData.get("salary"),
        };
        try {
            const res = await fetch(`https://6a26c767a84f9d39e907e1b6.mockapi.io/teachers/${editingT}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(teacherObj)
            });
            if (!res.ok) {
                throw new Error(`Failed to update teacher: ${res.status}`);
            }
            const updatedTeacher = await res.json();
            setTeachers((currentTeachers) =>
                currentTeachers.map((teacher) =>
                    teacher.id === updatedTeacher.id ? updatedTeacher : teacher
                )
            );
            setTeacherEditModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (teacherModal) {
        return (
            <div onClick={() => setTeacherModal(false)} className=" fixed top-0 w-full h-screen bg-[gray] flex justify-center items-center">
                <form onSubmit={addTeacher} onClick={(e) => e.stopPropagation()} className="max-w-md mx-auto bg-[white] rounded-2xl p-5">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="teacherName" id="teacherName"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="teacherName"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="avatar" id="avatar"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="avatar"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Avatar</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="email"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="experience" id="experience"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="experience"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Experience</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="phoneNumber" id="phoneNumber"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="phoneNumber"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="subject" id="subject"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="subject"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Subject</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="salary" id="salary"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="salary"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Salary</label>
                        </div>
                    </div>
                    <button type="submit"
                        className="text-white bg-[blue] text-[white] w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                </form>
            </div>
        )
    }

    if (teacherEditModal) {
        return (
            <div onClick={() => setTeacherEditModal(false)} className=" fixed top-0 w-full h-screen bg-[gray] flex justify-center items-center">
                <form onSubmit={editTeacher} onClick={(e) => e.stopPropagation()} className="max-w-md mx-auto bg-[white] rounded-2xl p-5">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="teacherName" id="teacherName" defaultValue={editingTeacher?.teacherName ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="teacherName"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="avatar" id="avatar" defaultValue={editingTeacher?.avatar ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="avatar"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Avatar</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" defaultValue={editingTeacher?.email ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="email"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="experience" id="experience" defaultValue={editingTeacher?.experience ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="experience"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Experience</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="phoneNumber" id="phoneNumber" defaultValue={editingTeacher?.phoneNumber ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="phoneNumber"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="subject" id="subject" defaultValue={editingTeacher?.subject ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="subject"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Subject</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="salary" id="salary" defaultValue={editingTeacher?.salary ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="salary"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Salary</label>
                        </div>
                    </div>
                    <button type="submit"
                        className="text-white bg-[blue] text-[white] w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                </form>
            </div>
        )
    }



    async function addStudent(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const studentObj = {
            studentName: formData.get("studentName"),
            avatar: formData.get("avatar"),
            email: formData.get("email"),
        };
        try {
            const res = await fetch("https://6a26c767a84f9d39e907e1b6.mockapi.io/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(studentObj)
            });
            if (!res.ok) {
                throw new Error(`Failed to add student: ${res.status}`);
            }
            const createdStudent = await res.json();
            setStudents((currentStudents) => [...currentStudents, createdStudent]);
            setStudentModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    const editingStudent = students.find((student) => student.id === editingS);

    async function editStudent(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const studentObj = {
            studentName: formData.get("studentName"),
            avatar: formData.get("avatar"),
            email: formData.get("email"),
        };
        try {
            const res = await fetch(`https://6a26c767a84f9d39e907e1b6.mockapi.io/students/${editingS}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(studentObj)
            });
            if (!res.ok) {
                throw new Error(`Failed to update student: ${res.status}`);
            }
            const updatedStudent = await res.json();
            setStudents((currentStudents) =>
                currentStudents.map((student) =>
                    student.id === updatedStudent.id ? updatedStudent : student
                )
            );
            setStudentEditModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (studentModal) {
        return (
            <div onClick={() => setStudentModal(false)} className=" fixed top-0 w-full h-screen bg-[gray] flex justify-center items-center">
                <form onSubmit={addStudent} onClick={(e) => e.stopPropagation()} className="max-w-md mx-auto bg-[white] rounded-2xl p-5">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="studentName" id="studentName"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="studentName"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="avatar" id="avatar"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="avatar"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Avatar</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="email"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                    </div>
                    <button type="submit"
                        className="text-white bg-[blue] text-[white] w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                </form>
            </div>
        )
    }



    if (studentEditModal) {
        return (
            <div onClick={() => setStudentEditModal(false)} className=" fixed top-0 w-full h-screen bg-[gray] flex justify-center items-center">
                <form onSubmit={editStudent} onClick={(e) => e.stopPropagation()} className="max-w-md mx-auto bg-[white] rounded-2xl p-5">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="studentName" id="studentName" defaultValue={editingStudent?.studentName ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="studentName"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="avatar" id="avatar" defaultValue={editingStudent?.avatar ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="avatar"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Avatar</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" defaultValue={editingStudent?.email ?? ""}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                placeholder=" " required />
                            <label htmlFor="email"
                                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                    </div>
                    <button type="submit"
                        className="text-white bg-[blue] text-[white] w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                </form>
            </div>
        )
    }





    return (
        <Tabs>
            <TabList className="flex justify-center gap-4 bg-gray-200 p-2 rounded-lg">
                <Tab className="bg-gray-300 text-gray-700 hover:bg-gray-400 cursor-pointer p-[10px] rounded-2xl">Teachers</Tab>
                <Tab className="bg-gray-300 text-gray-700 hover:bg-gray-400 cursor-pointer p-[10px] rounded-2xl">Students</Tab>
            </TabList>


            <TabPanel className=" mt-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-[35px] font-bold">Teachers</h1>
                        <p>Manage your teachers</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" className="p-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <button onClick={() => setTeacherModal(true)} className="p-5 rounded-2xl bg-[blue] text-[white] font-bold text-[18px] cursor-pointer">+ Add
                            Teacher</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {
                        teachers.map((teacher) => {
                            return (
                                <div key={teacher.id} className="flex flex-col border rounded-2xl items-center gap-2 p-5">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img className="w-16 h-16 rounded-full" src={teacher.avatar} alt="" />
                                    </div>
                                    <h1 className="text-lg font-bold line-clamp-1">{teacher.teacherName}</h1>
                                    <p className="text-gray-600 line-clamp-1">{teacher.email}</p>
                                    <p className="text-gray-600 line-clamp-1">{teacher.subject}</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => {
                                            setEditingT(teacher.id);
                                            setTeacherEditModal(true)
                                        }} className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg">Edit</button>
                                        <button onClick={() => handleDeleteTeacher(teacher.id)} className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg">Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </TabPanel>
            <TabPanel className=" mt-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-[35px] font-bold">Students</h1>
                        <p>Manage your students</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" className="p-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <button onClick={() => setStudentModal(true)} className="p-5 rounded-2xl bg-[blue] text-[white] font-bold text-[18px] cursor-pointer">+ Add
                            Students</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {
                        students.map((student) => {
                            return (
                                <div key={student.id} className="flex flex-col border rounded-2xl items-center gap-2 p-5">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img className="w-16 h-16 rounded-full" src={student.avatar} alt="" />
                                    </div>
                                    <h1 className="text-lg font-bold line-clamp-1">{student.studentName}</h1>
                                    <p className="text-gray-600 line-clamp-1">{student.email}</p>
                                    <p className="text-gray-600 line-clamp-1">{student.grade}</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => {
                                            setEditingS(student.id);
                                            setStudentEditModal(true)
                                        }} className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg">Edit</button>
                                        <button onClick={() => handleDeleteStudent(student.id, student.teacherId)} className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg">Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default TabUsers